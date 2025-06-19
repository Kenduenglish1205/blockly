let setup = "def setup():\n";
let loop = "while (1):\n";
//------
function checkConnectedToStart(block) {
  let parent = block.getParent();
  while (parent) {
    if (parent.type === "event_program_starts") {
      block.setWarningText(null);
      return true;
    }
    parent = parent.getParent();
  }
  block.setWarningText(
    'Khối này phải được nối với "when Kulbot starts" để hoạt động.'
  );
  return false;
}

// ----------------event_program_starts----
// --- codetong = python.pythonGenerator.forBlock["event_program_starts"](block)
python.pythonGenerator.forBlock["event_program_starts"] = function (block) {
  const statements_do =
    python.pythonGenerator.statementToCode(block, "DO") || "";
  let foreverCode = "";
  let otherCode = "";
  let lines = statements_do.split("\n");
  let whileLevel = 0;
  let inForever = false;

  lines.forEach((line) => {
    if (line.trim().startsWith("while (1):")) {
      whileLevel++;
      foreverCode += "\t".repeat(whileLevel) + line.trimStart() + "\n";
      inForever = true;
    } else if (
      inForever &&
      (line.startsWith("    ") || line.startsWith("\t"))
    ) {
      foreverCode += "\t".repeat(whileLevel + 1) + line.trim() + "\n";
    } else {
      if (line.trim() !== "") otherCode += "\t" + line.trim() + "\n";
      inForever = false;
      whileLevel = 0;
    }
  });

  let code =
    setup +
    "\tRob.KULBOT_INIT()\n" +
    "\tRob.KULBOT_SENSOR_INIT()\n" +
    otherCode +
    "\n";
  code += foreverCode;
  return code;
};

// python.pythonGenerator.forBlock["event_program_starts"] = function (block) {
//   const statements_do =
//     python.pythonGenerator.statementToCode(block, "DO") || "";
//   let code = setup + "\tRob.KULBOT_INIT()\n" + "\tRob.KULBOT_SENSOR_INIT()\n";
//   code += statements_do;
//   return code;
// };
//----------------delay-------------------
python.pythonGenerator.forBlock["delay"] = function (block) {
  if (!checkConnectedToStart(block)) return "";
  const number =
    python.pythonGenerator.valueToCode(
      block,
      "number",
      python.pythonGenerator.ORDER_NONE
    ) || "1";
  return `delay(${number} * 1000)\n`;
};

//----------------delay_until-------------------
python.pythonGenerator.forBlock["delay_until"] = function (block) {
  if (!checkConnectedToStart(block)) return "";
  const condition =
    python.pythonGenerator.valueToCode(
      block,
      "condition",
      python.pythonGenerator.ORDER_NONE
    ) || "False";
  return `while (!${condition})\n`;
};
//----------------loop_times--------------
python.pythonGenerator.forBlock["loop_times"] = function (block) {
  if (!checkConnectedToStart(block)) return "";
  const times =
    python.pythonGenerator.valueToCode(
      block,
      "number",
      python.pythonGenerator.ORDER_NONE
    ) || "10";
  const statements_do =
    python.pythonGenerator.statementToCode(block, "DO") ||
    python.pythonGenerator.PASS;
  return `for (int i=0; i<${times}; i++)\n${statements_do}`;
};
//----------------loop_until--------------
python.pythonGenerator.forBlock["loop_until"] = function (block) {
  if (!checkConnectedToStart(block)) return "";
  const condition =
    python.pythonGenerator.valueToCode(
      block,
      "condition",
      python.pythonGenerator.ORDER_NONE
    ) || "False";
  const statements_do =
    python.pythonGenerator.statementToCode(block, "DO") ||
    python.pythonGenerator.PASS;
  return `while (!${condition})\n${statements_do}`;
};
//------------ loop_forever ------------
python.pythonGenerator.forBlock["loop_forever"] = function (block) {
  if (!checkConnectedToStart(block)) return "";
  const statements_do =
    python.pythonGenerator.statementToCode(block, "DO") ||
    python.pythonGenerator.PASS;
  return `while (1):\n${statements_do}`;
};
//------------ if ------------
python.pythonGenerator.forBlock["if"] = function (block) {
  if (!checkConnectedToStart(block)) return "";
  const condition =
    python.pythonGenerator.valueToCode(
      block,
      "CONDITION",
      python.pythonGenerator.ORDER_NONE
    ) || "False";

  const statements_do =
    python.pythonGenerator.statementToCode(block, "DO") ||
    python.pythonGenerator.PASS;

  return `if ${condition}:\n${statements_do}`;
};
//------------ if_else ------------
python.pythonGenerator.forBlock["if_else"] = function (block) {
  if (!checkConnectedToStart(block)) return "";
  const condition =
    python.pythonGenerator.valueToCode(
      block,
      "CONDITION",
      python.pythonGenerator.ORDER_NONE
    ) || "False";
  const statements_do =
    python.pythonGenerator.statementToCode(block, "DO") ||
    python.pythonGenerator.PASS;
  const statements_else =
    python.pythonGenerator.statementToCode(block, "ELSE") ||
    python.pythonGenerator.PASS;

  return `if ${condition}:\n${statements_do}else:\n${statements_else}`;
};
//------------ Operators ------------
python.pythonGenerator.forBlock["operators"] = function (block) {
  const op = block.getFieldValue("operators");
  const n1 =
    python.pythonGenerator.valueToCode(
      block,
      "number1",
      python.pythonGenerator.ORDER_ATOMIC
    ) || "0";
  const n2 =
    python.pythonGenerator.valueToCode(
      block,
      "number2",
      python.pythonGenerator.ORDER_ATOMIC
    ) || "50";
  return [`${n1} ${op} ${n2}`, python.pythonGenerator.ORDER_NONE];
};

python.pythonGenerator.forBlock["formula"] = function (block) {
  const op = block.getFieldValue("formula");
  const num =
    python.pythonGenerator.valueToCode(
      block,
      "number",
      python.pythonGenerator.ORDER_NONE
    ) || "0";

  const ops = {
    abs: `abs(${num})`,
    floor: `math.floor(${num})`,
    ceiling: `math.ceil(${num})`,
    sqrt: `math.sqrt(${num})`,
    sin: `math.sin(${num})`,
    cos: `math.cos(${num})`,
    tan: `math.tan(${num})`,
    asin: `math.asin(${num})`,
    acos: `math.acos(${num})`,
    atan: `math.atan(${num})`,
    ln: `math.log(${num})`,
    log: `math.log10(${num})`,
    "e^": `math.exp(${num})`,
    "10^": `10 ** (${num})`,
    round: `round(${num})`,
  };

  return [ops[op] || "0", python.pythonGenerator.ORDER_NONE];
};

python.pythonGenerator.forBlock["compare"] = function (block) {
  const op = block.getFieldValue("compare");
  const n1 =
    python.pythonGenerator.valueToCode(
      block,
      "number1",
      python.pythonGenerator.ORDER_ATOMIC
    ) || "0";
  const n2 =
    python.pythonGenerator.valueToCode(
      block,
      "number2",
      python.pythonGenerator.ORDER_ATOMIC
    ) || "0";
  return [`${n1} ${op} ${n2}`, python.pythonGenerator.ORDER_NONE];
};

python.pythonGenerator.forBlock["compare_and"] = function (block) {
  const a =
    python.pythonGenerator.valueToCode(
      block,
      "A",
      python.pythonGenerator.ORDER_LOGICAL_AND
    ) || "False";
  const b =
    python.pythonGenerator.valueToCode(
      block,
      "B",
      python.pythonGenerator.ORDER_LOGICAL_AND
    ) || "False";
  return [`(${a} and ${b})`, python.pythonGenerator.ORDER_LOGICAL_AND];
};

python.pythonGenerator.forBlock["compare_or"] = function (block) {
  const a =
    python.pythonGenerator.valueToCode(
      block,
      "A",
      python.pythonGenerator.ORDER_LOGICAL_OR
    ) || "False";
  const b =
    python.pythonGenerator.valueToCode(
      block,
      "B",
      python.pythonGenerator.ORDER_LOGICAL_OR
    ) || "False";
  return [`(${a} or ${b})`, python.pythonGenerator.ORDER_LOGICAL_OR];
};

python.pythonGenerator.forBlock["compare_not"] = function (block) {
  const value =
    python.pythonGenerator.valueToCode(
      block,
      "BOOL",
      python.pythonGenerator.ORDER_LOGICAL_NOT
    ) || "False";
  return [`(not ${value})`, python.pythonGenerator.ORDER_LOGICAL_NOT];
};

python.pythonGenerator.forBlock["random"] = function (block) {
  const from =
    python.pythonGenerator.valueToCode(
      block,
      "FROM",
      python.pythonGenerator.ORDER_ATOMIC
    ) || "0";
  const to =
    python.pythonGenerator.valueToCode(
      block,
      "TO",
      python.pythonGenerator.ORDER_ATOMIC
    ) || "100";
  return [`random(${from}, ${to})`, python.pythonGenerator.ORDER_NONE];
};
//-----------------led-------------------

python.pythonGenerator.forBlock["led_on"] = function (block) {
  if (!checkConnectedToStart(block)) return "";
  const port = block.getFieldValue("port");
  const color = block.getFieldValue("color");
  return `Rob.KULBOT_RGB_ON(${port},${color})\n`;
};
//Rob.KULBOT_RGB_INIT(100);
python.pythonGenerator.forBlock["led_off"] = function (block) {
  if (!checkConnectedToStart(block)) return "";
  const port = block.getFieldValue("port");
  return `Rob.KULBOT_RGB_OFF(${port})\n`;
};

python.pythonGenerator.forBlock["led_all_on"] = function (block) {
  if (!checkConnectedToStart(block)) return "";
  const color = block.getFieldValue("color");
  return `Rob.KULBOT_RGB_ALL_ON(${color})\n`;
};

python.pythonGenerator.forBlock["led_all_off"] = function (block) {
  if (!checkConnectedToStart(block)) return "";
  return `Rob.KULBOT_RGB_ALL_OFF()\n`;
};

python.pythonGenerator.forBlock["led_button_on"] = function (block) {
  if (!checkConnectedToStart(block)) return "";
  const port = block.getFieldValue("port");
  const color = block.getFieldValue("color");
  return `Rob.KULBOT_SET_BUTTON_LED(${port},${color})\n`;
};

python.pythonGenerator.forBlock["led_IR_on"] = function (block) {
  if (!checkConnectedToStart(block)) return "";
  const port = block.getFieldValue("port");
  const led = block.getFieldValue("IR_Led");
  const color = block.getFieldValue("color");
  return `Rob.KULBOT_SET_IR_SENSOR_LED(${port},${led},${color})\n`;
};
//-----------------sensor-------------------
python.pythonGenerator.forBlock["init_sensor"] = function (block) {
  if (!checkConnectedToStart(block)) return "";
  const port = block.getFieldValue("port");
  const SENSOR = block.getFieldValue("SENSOR");
  return `Rob.KULBOT_${SENSOR}_INIT(${port})\n`;
};
// Ultrasonic
python.pythonGenerator.forBlock["ultrasonic"] = function (block) {
  const port = block.getFieldValue("Ultrasonic");
  return `Rob.KULBOT_ULTRASONIC_GET(${port})`;
};

// Line Sensor
python.pythonGenerator.forBlock["line_sensor"] = function (block) {
  const port = block.getFieldValue("port");
  const line = block.getFieldValue("line");
  return `Rob.KULBOT_LINE_SENSOR_GET(${port}, ${line})`;
};

// IR Sensor
python.pythonGenerator.forBlock["ir_sensor"] = function (block) {
  const port = block.getFieldValue("port");
  return `Rob.KULBOT_IR_SENSOR_GET(${port})`;
};

// Touch Sensor
python.pythonGenerator.forBlock["touch_sensor"] = function (block) {
  const port = block.getFieldValue("port");
  return `Rob.KULBOT_TOUCH_SENSOR_GET(${port})`;
};

// Temp/Hum Sensor
python.pythonGenerator.forBlock["temp_sensor"] = function (block) {
  const type = block.getFieldValue("type");
  const port = block.getFieldValue("port");
  return `Rob.KULBOT_DHT_SENSOR_GET(${port}, ${type})`;
};

// Soil Humidity Sensor
python.pythonGenerator.forBlock["soil_hum_sensor"] = function (block) {
  const port = block.getFieldValue("port");
  return `Rob.KULBOT_SOIL_HUM_SENSOR_GET(${port})`;
};

// Gas Sensor
python.pythonGenerator.forBlock["gas_sensor"] = function (block) {
  const port = block.getFieldValue("port");
  return `Rob.KULBOT_GAS_SENSOR_GET(${port})`;
};

// Gryro Sensor
python.pythonGenerator.forBlock["gryro_sensor"] = function (block) {
  const port = block.getFieldValue("port");
  const data = block.getFieldValue("data");
  return `Rob.KULBOT_GRYRO_SENSOR_GET(${port}, ${data})`;
};

// Color Sensor
python.pythonGenerator.forBlock["color_sensor"] = function (block) {
  const port = block.getFieldValue("port");
  const color = block.getFieldValue("color");
  return `Rob.KULBOT_COLOR_SENSOR_GET(${port}, "${color}")`;
};

// Lux Sensor
python.pythonGenerator.forBlock["lux_sensor"] = function (block) {
  const port = block.getFieldValue("port");
  return `Rob.KULBOT_LUX_SENSOR_GET(${port})`;
};

// Light Sensor
python.pythonGenerator.forBlock["light_sensor"] = function (block) {
  const port = block.getFieldValue("port");
  return `Rob.KULBOT_LIGHT_SENSOR_GET(${port})`;
};
//---------modules----------
python.pythonGenerator.forBlock["init_module"] = function (block) {
  if (!checkConnectedToStart(block)) return "";
  const port = block.getFieldValue("port");
  const module = block.getFieldValue("MODULE");
  return `Rob.KULBOT_${module}_INIT(${port})\n`;
};
// Traffic Light
python.pythonGenerator.forBlock["traffic_light"] = function (block) {
  const port = block.getFieldValue("port");
  const color = block.getFieldValue("color");
  const status = block.getFieldValue("Status");
  return `Rob.KULBOT_TRAFFIC_LIGHT_SET(${port}, ${color}, ${status})\n`;
};

// Joystick
python.pythonGenerator.forBlock["joystick"] = function (block) {
  const port = block.getFieldValue("port");
  const type = block.getFieldValue("type");
  return `Rob.KULBOT_JOYSTICK_GET(${port}, ${type})`;
};

// Volume
python.pythonGenerator.forBlock["volume"] = function (block) {
  const port = block.getFieldValue("port");
  return `Rob.KULBOT_VOLUME_GET(${port})`;
};

// Get Button Led
python.pythonGenerator.forBlock["get_button"] = function (block) {
  const port = block.getFieldValue("port");
  const button = block.getFieldValue("button");
  return `Rob.KULBOT_BUTTON_LED_GET(${port}, ${button})`;
};

// Init Sensor
python.pythonGenerator.forBlock["init_sensor"] = function (block) {
  if (!checkConnectedToStart(block)) return "";
  const SENSOR = block.getFieldValue("SENSOR");
  const port = block.getFieldValue("port");
  return `Rob.KULBOT_${SENSOR}_INIT(${port})\n`;
};
//------------------lcd-------------------
python.pythonGenerator.forBlock["lcd_init"] = function (block) {
  if (!checkConnectedToStart(block)) return "";
  const port = block.getFieldValue("port");
  return `Rob.KULBOT_LCD_INIT(${port})\n`;
};
// lcd_number
python.pythonGenerator.forBlock["lcd_number"] = function (block) {
  if (!checkConnectedToStart(block)) return "";
  const port = block.getFieldValue("port");
  const column =
    python.pythonGenerator.valueToCode(
      block,
      "column",
      python.pythonGenerator.ORDER_ATOMIC
    ) || "0";
  const cell =
    python.pythonGenerator.valueToCode(
      block,
      "cell",
      python.pythonGenerator.ORDER_ATOMIC
    ) || "0";
  const number =
    python.pythonGenerator.valueToCode(
      block,
      "number",
      python.pythonGenerator.ORDER_ATOMIC
    ) || "0";
  return `Rob.KULBOT_LCD_PRINT_NUMBER(${port}, ${column}, ${cell}, ${number})\n`;
};
