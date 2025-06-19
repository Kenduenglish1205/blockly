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
//----------------INIT----
javascript.javascriptGenerator.forBlock["initialize"] = function (block) {
  if (!checkConnectedToStart(block)) return "";
  return `Rob.KULBOT_INIT()\n`;
};

//----------------event_program_starts----
javascript.javascriptGenerator.forBlock["event_program_starts"] = function (
  block
) {
  const statements_do =
    javascript.javascriptGenerator.statementToCode(block, "DO") || "";
  let code = "void setup() {\n";
  code += statements_do;
  return code;
};
//----------------delay-------------------
javascript.javascriptGenerator.forBlock["delay"] = function (block) {
  if (!checkConnectedToStart(block)) return "";
  const number =
    javascript.javascriptGenerator.valueToCode(
      block,
      "number",
      javascript.javascriptGenerator.ORDER_NONE
    ) || "1";
  return `delay(${number} * 1000)\n`;
};

//----------------delay_until-------------------
javascript.javascriptGenerator.forBlock["delay_until"] = function (block) {
  if (!checkConnectedToStart(block)) return "";
  const condition =
    javascript.javascriptGenerator.valueToCode(
      block,
      "condition",
      javascript.javascriptGenerator.ORDER_NONE
    ) || "False";
  return `while (!${condition}):\n`;
};
//----------------loop_times--------------
javascript.javascriptGenerator.forBlock["loop_times"] = function (block) {
  if (!checkConnectedToStart(block)) return "";
  const times =
    javascript.javascriptGenerator.valueToCode(
      block,
      "number",
      javascript.javascriptGenerator.ORDER_NONE
    ) || "10";
  const statements_do =
    javascript.javascriptGenerator.statementToCode(block, "DO") ||
    javascript.javascriptGenerator.PASS;
  return `for (int i=0; i<${times}; i++)\n${statements_do}`;
};
//----------------loop_until--------------
javascript.javascriptGenerator.forBlock["loop_until"] = function (block) {
  if (!checkConnectedToStart(block)) return "";
  const condition =
    javascript.javascriptGenerator.valueToCode(
      block,
      "condition",
      javascript.javascriptGenerator.ORDER_NONE
    ) || "False";
  const statements_do =
    javascript.javascriptGenerator.statementToCode(block, "DO") ||
    javascript.javascriptGenerator.PASS;
  return `while (!${condition})\n${statements_do}`;
};
//------------ loop_forever ------------
javascript.javascriptGenerator.forBlock["loop_forever"] = function (block) {
  if (!checkConnectedToStart(block)) return "";
  let parent = block.getParent();
  let hasParentLoopForever = false;
  while (parent) {
    if (parent.type === "loop_forever") {
      hasParentLoopForever = true;
      break;
    }
    parent = parent.getParent();
  }
  const statements_do =
    javascript.javascriptGenerator.statementToCode(block, "DO") ||
    javascript.javascriptGenerator.PASS;
  if (hasParentLoopForever) {
    // Nếu là loop_forever lồng nhau, chỉ sinh while (1)
    return `while (1)\n${statements_do}`;
  } else {
    // Nếu là loop_forever đầu tiên, sinh loop + statements_do
    return loop + statements_do;
  }
};
//------------ if ------------
javascript.javascriptGenerator.forBlock["if"] = function (block) {
  const condition =
    javascript.javascriptGenerator.valueToCode(
      block,
      "CONDITION",
      javascript.javascriptGenerator.ORDER_NONE
    ) || "false";

  const doCode =
    javascript.javascriptGenerator.statementToCode(block, "DO") || "";

  return `if (${condition}) {\n${doCode}}\n`;
};
//------------ if_else ------------
javascript.javascriptGenerator.forBlock["if_else"] = function (block) {
  const condition =
    javascript.javascriptGenerator.valueToCode(
      block,
      "CONDITION",
      javascript.javascriptGenerator.ORDER_NONE
    ) || "false";

  const statements_do =
    javascript.javascriptGenerator.statementToCode(block, "DO") || "";
  const statements_else =
    javascript.javascriptGenerator.statementToCode(block, "ELSE") || "";

  return `if (${condition}) {\n${statements_do}} else {\n${statements_else}}\n`;
};
///------------ Operators ------------
javascript.javascriptGenerator.forBlock["operators"] = function (block) {
  const op = block.getFieldValue("operators");
  const n1 =
    javascript.javascriptGenerator.valueToCode(
      block,
      "number1",
      javascript.javascriptGenerator.ORDER_ATOMIC
    ) || "0";
  const n2 =
    javascript.javascriptGenerator.valueToCode(
      block,
      "number2",
      javascript.javascriptGenerator.ORDER_ATOMIC
    ) || "0";
  return [`(${n1} ${op} ${n2})`, javascript.javascriptGenerator.ORDER_NONE];
};

javascript.javascriptGenerator.forBlock["formula"] = function (block) {
  const op = block.getFieldValue("formula");
  const num =
    javascript.javascriptGenerator.valueToCode(
      block,
      "number",
      javascript.javascriptGenerator.ORDER_NONE
    ) || "0";

  const ops = {
    abs: `Math.abs(${num})`,
    floor: `Math.floor(${num})`,
    ceiling: `Math.ceil(${num})`,
    sqrt: `Math.sqrt(${num})`,
    sin: `Math.sin(${num})`,
    cos: `Math.cos(${num})`,
    tan: `Math.tan(${num})`,
    asin: `Math.asin(${num})`,
    acos: `Math.acos(${num})`,
    atan: `Math.atan(${num})`,
    ln: `Math.log(${num})`,
    log: `Math.log10 ? Math.log10(${num}) : Math.log(${num}) / Math.LN10`,
    "e^": `Math.exp(${num})`,
    "10^": `Math.pow(10, ${num})`,
    round: `Math.round(${num})`,
  };

  return [ops[op] || "0", javascript.javascriptGenerator.ORDER_NONE];
};

javascript.javascriptGenerator.forBlock["compare"] = function (block) {
  const op = block.getFieldValue("compare");
  const n1 =
    javascript.javascriptGenerator.valueToCode(
      block,
      "number1",
      javascript.javascriptGenerator.ORDER_ATOMIC
    ) || "0";
  const n2 =
    javascript.javascriptGenerator.valueToCode(
      block,
      "number2",
      javascript.javascriptGenerator.ORDER_ATOMIC
    ) || "0";
  return [`(${n1} ${op} ${n2})`, javascript.javascriptGenerator.ORDER_NONE];
};

javascript.javascriptGenerator.forBlock["compare_and"] = function (block) {
  const a =
    javascript.javascriptGenerator.valueToCode(
      block,
      "A",
      javascript.javascriptGenerator.ORDER_LOGICAL_AND
    ) || "false";
  const b =
    javascript.javascriptGenerator.valueToCode(
      block,
      "B",
      javascript.javascriptGenerator.ORDER_LOGICAL_AND
    ) || "false";
  return [`(${a} && ${b})`, javascript.javascriptGenerator.ORDER_LOGICAL_AND];
};

javascript.javascriptGenerator.forBlock["compare_or"] = function (block) {
  const a =
    javascript.javascriptGenerator.valueToCode(
      block,
      "A",
      javascript.javascriptGenerator.ORDER_LOGICAL_OR
    ) || "false";
  const b =
    javascript.javascriptGenerator.valueToCode(
      block,
      "B",
      javascript.javascriptGenerator.ORDER_LOGICAL_OR
    ) || "false";
  return [`(${a} || ${b})`, javascript.javascriptGenerator.ORDER_LOGICAL_OR];
};

javascript.javascriptGenerator.forBlock["compare_not"] = function (block) {
  const value =
    javascript.javascriptGenerator.valueToCode(
      block,
      "BOOL",
      javascript.javascriptGenerator.ORDER_LOGICAL_NOT
    ) || "false";
  return [`(!${value})`, javascript.javascriptGenerator.ORDER_LOGICAL_NOT];
};

javascript.javascriptGenerator.forBlock["random"] = function (block) {
  const from =
    javascript.javascriptGenerator.valueToCode(
      block,
      "FROM",
      javascript.javascriptGenerator.ORDER_ATOMIC
    ) || "0";
  const to =
    javascript.javascriptGenerator.valueToCode(
      block,
      "TO",
      javascript.javascriptGenerator.ORDER_ATOMIC
    ) || "100";
  return [
    `Math.floor(Math.random() * (${to} - ${from} + 1)) + ${from}`,
    javascript.javascriptGenerator.ORDER_NONE,
  ];
};
//-----------------led-------------------

javascript.javascriptGenerator.forBlock["led_on"] = function (block) {
  if (!checkConnectedToStart(block)) return "";
  const port = block.getFieldValue("port");
  const color = block.getFieldValue("color");
  return `Rob.KULBOT_RGB_ON(${port},${color})\n`;
};

javascript.javascriptGenerator.forBlock["led_off"] = function (block) {
  if (!checkConnectedToStart(block)) return "";
  const port = block.getFieldValue("port");
  return `Rob.KULBOT_RGB_OFF(${port});\n`;
};

javascript.javascriptGenerator.forBlock["led_all_on"] = function (block) {
  if (!checkConnectedToStart(block)) return "";
  const color = block.getFieldValue("color");
  return `Rob.KULBOT_RGB_ALL_ON(${color})\n`;
};

javascript.javascriptGenerator.forBlock["led_all_off"] = function (block) {
  if (!checkConnectedToStart(block)) return "";
  return `Rob.KULBOT_RGB_ALL_OFF()\n`;
};

javascript.javascriptGenerator.forBlock["led_button_on"] = function (block) {
  if (!checkConnectedToStart(block)) return "";
  const port = block.getFieldValue("port");
  const color = block.getFieldValue("color");
  return `Rob.KULBOT_SET_BUTTON_LED(${port},${color})\n`;
};

javascript.javascriptGenerator.forBlock["led_IR_on"] = function (block) {
  if (!checkConnectedToStart(block)) return "";
  const port = block.getFieldValue("port");
  const led = block.getFieldValue("IR_Led");
  const color = block.getFieldValue("color");
  return `Rob.KULBOT_SET_IR_SENSOR_LED(${port},${led},${color});\n`;
};
//-----------------sensor_init-------------------
javascript.javascriptGenerator.forBlock["init_sensor"] = function (block) {
  if (!checkConnectedToStart(block)) return "";
  const port = block.getFieldValue("port");
  const sensor = block.getFieldValue("SENSOR");
  return `Rob.KULBOT_${sensor}_INIT(${port})\n`;
};
// Ultrasonic
javascript.javascriptGenerator.forBlock["ultrasonic"] = function (block) {
  const port = block.getFieldValue("Ultrasonic");
  return `Rob.KULBOT_ULTRASONIC_GET(${port})`;
};

// Line Sensor
javascript.javascriptGenerator.forBlock["line_sensor"] = function (block) {
  const port = block.getFieldValue("port");
  const line = block.getFieldValue("line");
  return `Rob.KULBOT_LINE_SENSOR_GET(${port}, "${line}")`;
};

// IR Sensor
javascript.javascriptGenerator.forBlock["ir_sensor"] = function (block) {
  const port = block.getFieldValue("port");
  return `Rob.KULBOT_IR_SENSOR_GET(${port})`;
};

// Touch Sensor
javascript.javascriptGenerator.forBlock["touch_sensor"] = function (block) {
  const port = block.getFieldValue("port");
  return `Rob.KULBOT_TOUCH_SENSOR_GET(${port})`;
};

// Temp/Hum Sensor
javascript.javascriptGenerator.forBlock["temp_sensor"] = function (block) {
  const type = block.getFieldValue("type");
  const port = block.getFieldValue("port");
  return `Rob.KULBOT_DHT_SENSOR_GET(${port}, "${type}")`;
};

// Soil Humidity Sensor
javascript.javascriptGenerator.forBlock["soil_hum_sensor"] = function (block) {
  const port = block.getFieldValue("port");
  return `Rob.KULBOT_SOIL_HUM_SENSOR_GET(${port})`;
};

// Gas Sensor
javascript.javascriptGenerator.forBlock["gas_sensor"] = function (block) {
  const port = block.getFieldValue("port");
  return `Rob.KULBOT_GAS_SENSOR_GET(${port})`;
};

// Gryro Sensor
javascript.javascriptGenerator.forBlock["gryro_sensor"] = function (block) {
  const port = block.getFieldValue("port");
  const data = block.getFieldValue("data");
  return `Rob.KULBOT_GRYRO_SENSOR_GET(${port}, ${data})`;
};

// Color Sensor
javascript.javascriptGenerator.forBlock["color_sensor"] = function (block) {
  const port = block.getFieldValue("port");
  const color = block.getFieldValue("color");
  return `Rob.KULBOT_COLOR_SENSOR_GET(${port}, "${color}")`;
};

// Lux Sensor
javascript.javascriptGenerator.forBlock["lux_sensor"] = function (block) {
  const port = block.getFieldValue("port");
  return `Rob.KULBOT_LUX_SENSOR_GET(${port})`;
};

// Light Sensor
javascript.javascriptGenerator.forBlock["light_sensor"] = function (block) {
  const port = block.getFieldValue("port");
  return `Rob.KULBOT_LIGHT_SENSOR_GET(${port})`;
};
//-----------------module_init-------------------
javascript.javascriptGenerator.forBlock["init_module"] = function (block) {
  if (!checkConnectedToStart(block)) return "";
  const port = block.getFieldValue("port");
  const module = block.getFieldValue("MODULE");
  return `Rob.KULBOT_${module}_INIT(${port})\n`;
};
// Traffic Light
javascript.javascriptGenerator.forBlock["traffic_light"] = function (block) {
  const port = block.getFieldValue("port");
  const color = block.getFieldValue("color");
  const status = block.getFieldValue("Status");
  return `Rob.KULBOT_TRAFFIC_LIGHT_SET(${port}, "${color}", "${status}")\n`;
};

// Joystick
javascript.javascriptGenerator.forBlock["joystick"] = function (block) {
  const port = block.getFieldValue("port");
  const type = block.getFieldValue("type");
  return `Rob.KULBOT_JOYSTICK_GET(${port}, "${type}")`;
};

// Volume
javascript.javascriptGenerator.forBlock["volume"] = function (block) {
  const port = block.getFieldValue("port");
  return `Rob.KULBOT_VOLUME_GET(${port})`;
};

// Get Button Led
javascript.javascriptGenerator.forBlock["get_button"] = function (block) {
  const port = block.getFieldValue("port");
  const button = block.getFieldValue("button");
  return `Rob.KULBOT_BUTTON_LED_GET(${port}, "${button}")`;
};

// Init Sensor
javascript.javascriptGenerator.forBlock["init_sensor"] = function (block) {
  if (!checkConnectedToStart(block)) return "";
  const SENSOR = block.getFieldValue("SENSOR");
  const port = block.getFieldValue("port");
  return `Rob.KULBOT_${SENSOR}_INIT(${port})\n`;
};
//------------------lcd-------------------
javascript.javascriptGenerator.forBlock["lcd_init"] = function (block) {
  if (!checkConnectedToStart(block)) return "";
  const port = block.getFieldValue("port");
  return `Rob.KULBOT_LCD_INIT(${port})\n`;
};
// lcd_number
javascript.javascriptGenerator.forBlock["lcd_number"] = function (block) {
  if (!checkConnectedToStart(block)) return "";
  const port = block.getFieldValue("port");
  const number =
    javascript.javascriptGenerator.valueToCode(
      block,
      "number",
      javascript.javascriptGenerator.ORDER_ATOMIC
    ) || "0";
  return `Rob.KULBOT_LCD_PRINT_NUMBER(${port}, ${number})\n`;
};
