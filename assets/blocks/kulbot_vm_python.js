let setup = "def setup():\n";
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
// python.pythonGenerator.forBlock["initialize"] = function (block) {
//   if (!checkConnectedToStart(block)) return "";
//   return ``;
// };
//----------------event_program_starts----
//--- codetong = python.pythonGenerator.forBlock["event_program_starts"](block)
python.pythonGenerator.forBlock["event_program_starts"] = function (block) {
  const statements_do =
    python.pythonGenerator.statementToCode(block, "DO") || "";
  let code = setup;
  code +=
    "\t\tRob.KULBOT_INIT()\n" +
    "\t\tRob.KULBOT_SENSOR_INIT()\n" +
    statements_do +
    "\n";
  return code;
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
    ) || "0";
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
  return [`(${n1} ${op} ${n2})`, python.pythonGenerator.ORDER_NONE];
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
  return [`random.randint(${from}, ${to})`, python.pythonGenerator.ORDER_NONE];
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
//---------modules----------
python.pythonGenerator.forBlock["init_module"] = function (block) {
  if (!checkConnectedToStart(block)) return "";
  const port = block.getFieldValue("port");
  const module = block.getFieldValue("MODULE");
  return `Rob.KULBOT_${module}_INIT(${port})\n`;
};
