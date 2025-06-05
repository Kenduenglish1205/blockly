"use strict";
const mod = [
  ["Traffic Light", "TRAFFIC_LIGHT"],
  ["Joystick", "JOYSTICK"],
  ["Volume", "VOLUME"],
  ["Button Led", "BUTTON_LED"],
];
const sensor = [
  ["Line Sensor", "LINE_SENSOR"],
  ["IR Sensor", "IR_SENSOR"],
  ["Touch Sensor", "TOUCH_SENSOR"],
  ["Temp/Hum Sensor", "DHT_SENSOR"],
  ["Soil Humidity Sensor", "SOIL_HUM_SENSOR"],
  ["Gas Sensor", "GAS_SENSOR"],
  ["Gryro Sensor", "GRYRO_SENSOR"],
  ["Color Sensor", "COLOR_SENSOR"],
  ["Light Sensor", "LIGHT_SENSOR"],
];
const type = "int_to_string";
const port_M = [
  ["M1", "M1"],
  ["M2", "M2"],
];
const gryro = [
  ["1", "1"],
  ["2", "2"],
  ["3", "3"],
  ["4", "4"],
  ["5", "5"],
  ["6", "6"],
  ["7", "7"],
  ["8", "8"],
];
const led_colour = [
  ["None", "None"],
  ["Red", "0"],
  ["Orange", "1"],
  ["Yellow", "2"],
  ["Green", "3"],
  ["Blue", "4"],
  ["Indigo", "5"],
  ["Violet", "6"],
  ["White", "7"],
  ["Black", "8"],
];
const port_1_8 = [
  ["1", "1"],
  ["2", "2"],
  ["3", "3"],
  ["4", "4"],
  ["5", "5"],
  ["6", "6"],
  ["7", "7"],
  ["8", "8"],
];
const operators = [
  ["+", "+"],
  ["-", "-"],
  ["*", "*"],
  ["/", "/"],
  ["mod", "mod"],
];
const compare = [
  ["<", "<"],
  ["<=", "<="],
  [">", ">"],
  [">=", ">="],
  ["=", "="],
  ["!=", "!="],
];
const formula = [
  ["abs", "abs"],
  ["floor", "floor"],
  ["ceiling", "ceiling"],
  ["sqrt", "sqrt"],
  ["sin", "sin"],
  ["cos", "cos"],
  ["tan", "tan"],
  ["asin", "asin"],
  ["acos", "acos"],
  ["atan", "atan"],
  ["ln", "ln"],
  ["log", "log"],
  ["e^", "e^"],
  ["10^", "10^"],
  ["round", "round"],
];

Blockly.defineBlocksWithJsonArray([
  {
    type: type,
    message0: "Text from number %1",
    args0: [
      {
        type: "input_value",
        name: "number",
        check: "Number",
      },
    ],
    output: "String",
    colour: 230,
    tooltip: "Convert a number to text",
    helpUrl: "",
  },
  // ---------kulbot start---
  // {
  //   type: "event_program_starts",
  //   message0: "when Kulbot starts",
  //   colour: "#FFBF00",
  //   nextStatement: true,
  //   tooltip: "Bắt đầu chương trình",
  //   helpUrl: "",
  // },
  {
    type: "event_program_starts",
    message0: "when Kulbot starts \n %1",
    colour: "#FFBF00",
    args0: [
      {
        type: "input_statement",
        name: "DO",
      },
    ],
  },

  // operators
  {
    type: "operators",
    message0: " %1 %2 %3 ",
    inputsInline: true,
    args0: [
      {
        type: "input_value",
        name: "number1",
        check: "Number",
      },
      {
        type: "field_dropdown",
        name: "operators",
        options: operators,
      },
      {
        type: "input_value",
        name: "number2",
        check: "Number",
      },
    ],
    output: "Number",
    colour: "#59C059",
  },
  //---formula
  {
    type: "formula",
    message0: "%1 of %2",
    output: "Number",
    colour: "#59C059",
    inputsInline: true,
    args0: [
      {
        type: "field_dropdown",
        name: "formula",
        options: formula,
      },
      {
        type: "input_value",
        name: "number",
        check: "Number",
      },
    ],
  },
  // compare
  {
    type: "compare",
    message0: " %1 %2 %3 ",
    inputsInline: true,
    args0: [
      {
        type: "input_value",
        name: "number1",
        check: "Number",
      },
      {
        type: "field_dropdown",
        name: "compare",
        options: compare,
      },
      {
        type: "input_value",
        name: "number2",
        check: "Number",
      },
    ],
    output: "Boolean",
    colour: "#59C059",
  },
  // AND ỎR NOT
  {
    type: "compare_and",
    message0: "%1 AND %2",
    output: "Boolean",
    inputsInline: true,
    colour: "#59C059",
    args0: [
      {
        type: "input_value",
        name: "A",
        check: "Boolean",
      },
      {
        type: "input_value",
        name: "B",
        check: "Boolean",
      },
    ],
  },
  {
    type: "compare_or",
    message0: "%1 OR %2",
    output: "Boolean",
    inputsInline: true,
    colour: "#59C059",
    args0: [
      {
        type: "input_value",
        name: "A",
        check: "Boolean",
      },
      {
        type: "input_value",
        name: "B",
        check: "Boolean",
      },
    ],
  },
  {
    type: "compare_not",
    message0: "not %1",
    args0: [{ type: "input_value", name: "BOOL", check: "Boolean" }],
    output: "Boolean",
    inputsInline: true,
    colour: "#59C059",
  },

  // random
  {
    type: "random",
    message0: "pick random %1 to %2",
    inputsInline: true,
    args0: [
      {
        type: "input_value",
        name: "FROM",
        check: "Number",
      },
      {
        type: "input_value",
        name: "TO",
        check: "Number",
      },
    ],
    output: "Number",
    colour: "#59C059",
  },
  // if
  {
    type: "if",
    message0: "if %1 do %2",
    args0: [
      {
        type: "input_value",
        name: "CONDITION",
        check: "Boolean",
      },
      {
        type: "input_statement",
        name: "DO",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: "#FFAB19",
  },
  {
    type: "if_else",
    message0: "if %1 do %2 else %3",
    args0: [
      {
        type: "input_value",
        name: "CONDITION",
        check: "Boolean",
      },
      {
        type: "input_statement",
        name: "DO",
      },
      {
        type: "input_statement",
        name: "ELSE",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: "#FFAB19",
    helpUrl: "",
  },
  // delay
  {
    previousStatement: null,
    nextStatement: null,
    type: "delay",
    message0: "wait for %1 seconds",
    colour: "#FFAB19",
    args0: [
      {
        type: "input_value",
        name: "number",
        check: "Number",
      },
    ],
  },
  {
    previousStatement: null,
    nextStatement: null,
    type: "delay_until",
    message0: "wait until %1",
    colour: "#FFAB19",
    args0: [
      {
        type: "input_value",
        name: "condition",
        check: "Boolean",
      },
    ],
  },
  // Loop
  {
    previousStatement: null,
    nextStatement: null,
    type: "loop_times",
    message0: "repeat %1 %2",
    colour: "#FFAB19",
    args0: [
      {
        type: "input_value",
        name: "number",
        check: "Number",
      },
      {
        type: "input_statement",
        name: "DO",
      },
    ],
  },
  {
    type: "loop_forever",
    message0: "forever \n%1",
    args0: [
      {
        type: "input_statement",
        name: "DO",
      },
    ],
    previousStatement: null,
    colour: "#FFAB19",
  },
  {
    type: "loop_until",
    message0: "repeat until %1 %2",
    args0: [
      {
        type: "input_value",
        name: "condition",
        check: "Boolean",
      },
      {
        type: "input_statement",
        name: "DO",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: "#FFAB19",
  },
  //--------Led--------------

  {
    type: "led_on",
    message0: "Turn On Led: Port %1 Color %2",
    colour: "#4C97FF",
    inputsInline: true,
    args0: [
      {
        type: "field_dropdown",
        name: "port",
        options: port_1_8,
      },
      {
        type: "field_dropdown",
        name: "color",
        options: led_colour,
      },
    ],
    previousStatement: false,
    nextStatement: true,
  },
  {
    type: "led_off",
    message0: "Turn Off Led: Port %1",
    colour: "#4C97FF",
    inputsInline: true,
    args0: [
      {
        type: "field_dropdown",
        name: "port",
        options: port_1_8,
      },
    ],
    previousStatement: false,
    nextStatement: true,
  },
  {
    type: "led_all_on",
    message0: "Turn On All Led: Color %1",
    colour: "#4C97FF",
    inputsInline: true,
    args0: [
      {
        type: "field_dropdown",
        name: "color",
        options: led_colour,
      },
    ],
    previousStatement: false,
    nextStatement: true,
  },
  {
    type: "led_all_off",
    message0: "Turn Off All Led",
    colour: "#4C97FF",
    inputsInline: true,
    previousStatement: false,
    nextStatement: true,
  },
  {
    type: "led_button_on",
    message0: "Set Button Led: Port %1 Color %2",
    colour: "#4C97FF",
    inputsInline: true,
    args0: [
      {
        type: "field_dropdown",
        name: "port",
        options: port_1_8,
      },
      {
        type: "field_dropdown",
        name: "color",
        options: led_colour,
      },
    ],
    previousStatement: false,
    nextStatement: true,
  },
  {
    type: "led_IR_on",
    message0: "Set IR Led: Port %1 Led %2 Color %3",
    colour: "#4C97FF",
    inputsInline: true,
    args0: [
      {
        type: "field_dropdown",
        name: "port",
        options: port_1_8,
      },
      {
        type: "field_dropdown",
        name: "IR_Led",
        options: [
          ["Right", "0"],
          ["Left", "1"],
          ["All", "2"],
        ],
      },
      {
        type: "field_dropdown",
        name: "color",
        options: led_colour,
      },
    ],
    previousStatement: false,
    nextStatement: true,
  },
  //------------module---------
  {
    type: "init_module",
    message0: "Init %1 port %2",
    colour: "#B3B3FF",
    inputsInline: true,
    nextStatement: null,
    previousStatement: null,
    args0: [
      {
        type: "field_dropdown",
        name: "MODULE",
        options: mod,
      },
      {
        type: "field_dropdown",
        name: "port",
        options: port_1_8,
      },
    ],
  },
  {
    type: "traffic_light",
    inputsInline: true,
    previousStatement: false,
    colour: "#B3B3FF",
    nextStatement: true,
    message0: "Set Traffic Light:Port %1 Color %2 Status %3",
    args0: [
      {
        type: "field_dropdown",
        name: "port",
        options: port_1_8,
      },
      {
        type: "field_dropdown",
        name: "color",
        options: [
          ["Red", "Red"],
          ["Yellow", "Yellow"],
          ["Green", "Green"],
        ],
      },
      {
        type: "field_dropdown",
        name: "Status",
        options: [
          ["On", "On"],
          ["Off", "Off"],
        ],
      },
    ],
  },
  {
    type: "joystick",
    inputsInline: true,
    message0: "Get Joystick : Port %1 Type %2",
    colour: "#B3B3FF",
    output: "Number",
    args0: [
      {
        type: "field_dropdown",
        name: "port",
        options: port_1_8,
      },
      {
        type: "field_dropdown",
        name: "type",
        options: [
          ["X", "X"],
          ["Y", "Y"],
        ],
      },
    ],
  },
  {
    type: "volume",
    inputsInline: true,
    message0: "Get Volume : Port %1",
    output: "Number",
    colour: "#B3B3FF",
    args0: [
      {
        type: "field_dropdown",
        name: "port",
        options: port_1_8,
      },
    ],
  },
  {
    type: "get_button",
    message0: "Get Button Led: Port %1 Button %2",
    colour: "#B3B3FF",
    inputsInline: true,
    args0: [
      {
        type: "field_dropdown",
        name: "port",
        options: port_1_8,
      },
      {
        type: "field_dropdown",
        name: "button",
        options: [
          ["Left", "Left"],
          ["Right", "Right"],
        ],
      },
    ],
    output: "Boolean",
  },
  //-----oSensr----
  {
    type: "init_sensor",
    message0: "Init %1 port %2",
    colour: "#148F77",
    inputsInline: true,
    nextStatement: null,
    previousStatement: null,
    args0: [
      {
        type: "field_dropdown",
        name: "SENSOR",
        options: sensor,
      },
      {
        type: "field_dropdown",
        name: "port",
        options: port_1_8,
      },
    ],
  },
  {
    type: "ultrasonic",
    output: "Number",
    colour: "#148F77",
    message0: "Get Ultrasonic: Port %1",
    args0: [
      {
        type: "field_dropdown",
        name: "Ultrasonic",
        options: port_1_8,
      },
    ],
  },
  {
    type: "line_sensor",
    output: "Boolean",
    colour: "#148F77",
    message0: "Get Line: Port %1 with line %2",
    args0: [
      {
        type: "field_dropdown",
        name: "port",
        options: port_1_8,
      },
      {
        type: "field_dropdown",
        name: "line",
        options: [
          ["Left", "Left"],
          ["Right", "Right"],
        ],
      },
    ],
  },
  {
    type: "ir_sensor",
    output: "Boolean",
    colour: "#148F77",
    message0: "Get Sensor IR : Port %1",
    args0: [
      {
        type: "field_dropdown",
        name: "port",
        options: port_1_8,
      },
    ],
  },
  {
    type: "touch_sensor",
    output: "Boolean",
    colour: "#148F77",
    message0: "Get Touch : Port %1",
    args0: [
      {
        type: "field_dropdown",
        name: "port",
        options: port_1_8,
      },
    ],
  },
  {
    type: "temp_sensor",
    output: "Number",
    colour: "#148F77",
    message0: "Get %1 : Port %2",
    args0: [
      {
        type: "field_dropdown",
        name: "type",
        options: [
          ["Temp", "Temp"],
          ["Hum", "Hum"],
        ],
      },
      {
        type: "field_dropdown",
        name: "port",
        options: port_1_8,
      },
    ],
  },
  {
    type: "soil_hum_sensor",
    output: "Number",
    colour: "#148F77",
    message0: "Get Soil Hum : Port %1",
    args0: [
      {
        type: "field_dropdown",
        name: "port",
        options: port_1_8,
      },
    ],
  },
  {
    type: "gas_sensor",
    output: "Number",
    colour: "#148F77",
    message0: "Get Gas : Port %1",
    args0: [
      {
        type: "field_dropdown",
        name: "port",
        options: port_1_8,
      },
    ],
  },
  {
    type: "gryro_sensor",
    output: "Number",
    colour: "#148F77",
    message0: "Get Gryro : Port %1 Data %2",
    args0: [
      {
        type: "field_dropdown",
        name: "port",
        options: port_1_8,
      },
      {
        type: "field_dropdown",
        name: "data",
        options: gryro,
      },
    ],
  },
  {
    type: "color_sensor",
    output: "Number",
    colour: "#148F77",
    message0: "Get Color : Port %1 Color %2",
    args0: [
      {
        type: "field_dropdown",
        name: "port",
        options: port_1_8,
      },
      {
        type: "field_dropdown",
        name: "color",
        options: [
          ["Red", "Red"],
          ["Green", "Green"],
          ["Blue", "Blue"],
          ["Clear", "Clear"],
        ],
      },
    ],
  },
  {
    type: "lux_sensor",
    output: "Number",
    colour: "#148F77",
    message0: "Get Lux : Port %1",
    args0: [
      {
        type: "field_dropdown",
        name: "port",
        options: port_1_8,
      },
    ],
  },
  {
    type: "light_sensor",
    output: "Number",
    colour: "#148F77",
    message0: "Get Light : Port %1",
    args0: [
      {
        type: "field_dropdown",
        name: "port",
        options: port_1_8,
      },
    ],
  },

  //--------Display---------
  {
    type: "lcd_number",
    previousStatement: false,
    nextStatement: true,
    colour: "#B99095",
    inputsInline: true,
    message0: "LCD Print Number: Port %1 Column %2 Cell %3 Number %4",
    args0: [
      {
        type: "field_dropdown",
        name: "port",
        options: port_1_8,
      },
      {
        type: "input_value",
        name: "column",
        check: "Number",
      },
      {
        type: "input_value",
        name: "cell",
        check: "Number",
      },
      {
        type: "input_value",
        name: "number",
        check: "Number",
      },
    ],
  },
  {
    type: "lcd_string",
    previousStatement: false,
    nextStatement: true,
    colour: "#B99095",
    inputsInline: true,
    message0: "LCD Print String: Port %1 Column %2 Cell %3 String %4",
    args0: [
      {
        type: "field_dropdown",
        name: "port",
        options: port_1_8,
      },
      {
        type: "input_value",
        name: "column",
      },
      {
        type: "input_value",
        name: "cell",
      },
      {
        type: "input_value",
        name: "string",
      },
    ],
  },
  {
    type: "lcd_clear",
    previousStatement: false,
    nextStatement: true,
    colour: "#B99095",
    inputsInline: true,
    message0: "LCD Clear: Port %1",
    args0: [
      {
        type: "field_dropdown",
        name: "port",
        options: port_1_8,
      },
    ],
  },
  //----------Motions---------
  {
    type: "motor",
    colour: "7CF3A0",
    previousStatement: false,
    nextStatement: true,
    inputsInline: true,
    message0: "Motor: Port %1 %2 out %3",
    args0: [
      {
        type: "field_dropdown",
        name: "port",
        options: port_M,
      },
      {
        type: "field_dropdown",
        name: "side",
        options: [
          ["Front", "Front"],
          ["Back", "Back"],
        ],
      },
      {
        type: "input_value",
        name: "number",
        check: "Number",
      },
    ],
  },
  {
    type: "servo",
    colour: "7CF3A0",
    previousStatement: false,
    nextStatement: true,
    inputsInline: true,
    message0: "Servo: Port %1 out %2",
    args0: [
      {
        type: "field_dropdown",
        name: "port",
        options: port_1_8,
      },
      {
        type: "input_value",
        name: "number",
        check: "Number",
      },
    ],
  },
  {
    type: "encoder",
    colour: "7CF3A0",
    previousStatement: false,
    nextStatement: true,
    inputsInline: true,
    message0: "Set Encoder: Port %1 out %2",
    args0: [
      {
        type: "field_dropdown",
        name: "port",
        options: port_M,
      },
      {
        type: "input_value",
        name: "number",
        check: "Number",
      },
    ],
  },
  {
    type: "tuning_encoder",
    colour: "7CF3A0",
    previousStatement: false,
    nextStatement: true,
    inputsInline: true,
    message0: "Set Tuning Encoder: Port %1 P %2 I %3 D %4",
    args0: [
      {
        type: "field_dropdown",
        name: "port",
        options: port_M,
      },
      {
        type: "input_value",
        name: "number",
        check: "Number",
      },
      {
        type: "input_value",
        name: "number1",
        check: "Number",
      },
      {
        type: "input_value",
        name: "number2",
        check: "Number",
      },
    ],
  },
  {
    type: "posi_encoder",
    colour: "7CF3A0",
    previousStatement: false,
    nextStatement: true,
    inputsInline: true,
    message0: "Set Posi Encoder: Port %1",
    args0: [
      {
        type: "field_dropdown",
        name: "port",
        options: port_M,
      },
    ],
  },
  //--------Serial---------
  {
    type: "print_serial",
    colour: "9966FF",
    previousStatement: false,
    nextStatement: true,
    inputsInline: true,
    message0: "Serial Print %1 %2",
    args0: [
      {
        type: "input_value",
        name: "TEXT",
      },
      {
        type: "field_dropdown",
        name: "type",
        options: [
          ["wrap", "wrap"],
          ["no-wrap", "no-wrap"],
        ],
      },
    ],
  },
  {
    type: "data_length_serial",
    colour: "9966FF",
    output: "String",
    inputsInline: true,
    message0: "Serial Available Data Length",
  },
  {
    type: "read_data_serial",
    colour: "9966FF",
    output: "String",
    inputsInline: true,
    message0: "Serial Read Data",
  },
  //-----------------Data-----------
  {
    type: "data_map",
    colour: "C15CC1",
    output: "Number",
    inputsInline: true,
    message0: "Map %1 From ( %2 , %3 )to( %4 , %5 )",
    args0: [
      {
        type: "input_value",
        name: "number1",
        check: "Number",
      },
      {
        type: "input_value",
        name: "number2",
        check: "Number",
      },
      {
        type: "input_value",
        name: "number3",
        check: "Number",
      },
      {
        type: "input_value",
        name: "number4",
        check: "Number",
      },
      {
        type: "input_value",
        name: "number5",
        check: "Number",
      },
    ],
  },
  {
    type: "data_constrain",
    colour: "C15CC1",
    output: "Number",
    inputsInline: true,
    message0: "Constrain %1 Between ( %2 , %3 )",
    args0: [
      {
        type: "input_value",
        name: "number1",
        check: "Number",
      },
      {
        type: "input_value",
        name: "number2",
        check: "Number",
      },
      {
        type: "input_value",
        name: "number3",
        check: "Number",
      },
    ],
  },
  {
    type: "data_convert_number",
    colour: "C15CC1",
    output: "Number",
    inputsInline: true,
    message0: "Convert %1 to %2",
    args0: [
      {
        type: "input_value",
        name: "number1",
        check: "Number",
      },
      {
        type: "field_dropdown",
        name: "type",
        options: [
          ["whole number", "whole number"],
          ["Decimal", "Decimal"],
          ["String", "String"],
        ],
      },
    ],
  },
  {
    type: "data_convert_number_character",
    colour: "C15CC1",
    output: "Number",
    inputsInline: true,
    message0: "Convert %1 to ASCII character",
    args0: [
      {
        type: "input_value",
        name: "number1",
        check: "Number",
      },
    ],
  },
  {
    type: "data_convert_character_number",
    colour: "C15CC1",
    output: "String",
    inputsInline: true,
    message0: "Convert %1 to ASCII number",
    args0: [
      {
        type: "input_value",
        name: "TEXT",
      },
    ],
  },
  //-------bluetooth--------
  {
    type: "bluetooth_initialize",
    message0: "Initialize Bluetooth: Name %1",
    args0: [
      {
        type: "field_input",
        name: "BLUETOOTH",
        text: "Bluetooth name",
      },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: "#CC0000",
  },
  {
    type: "bluetooth_print",
    message0: "Bluetooth Print %1",
    args0: [
      {
        type: "input_value",
        name: "TEXT",
      },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: "#CC0000",
  },
  {
    type: "bluetooth_available",
    message0: "Bluetooth Available",
    output: "Boolean",
    colour: "#CC0000",
  },
  {
    type: "bluetooth_read",
    message0: "Bluetooth Read",
    output: "String",
    colour: "#CC0000",
  },
  //-----wifi
  {
    type: "wifi_initialize",
    message0: "Initialize Wifi: SSID %1 PASSWORD %2",
    args0: [
      {
        type: "field_input",
        name: "SSID",
        text: "Wifi name",
      },
      {
        type: "field_input",
        name: "PASSWORD",
        text: "Wifi password",
      },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: "#33CCFF",
  },
  {
    type: "http_request",
    message0: "HTTP Request: URL %1 Method %2 Data %3",
    args0: [
      {
        type: "field_input",
        name: "URL",
        text: "http://stemkul.com",
      },
      {
        type: "field_dropdown",
        name: "METHOD",
        options: [
          ["GET", "GET"],
          ["POST", "POST"],
          ["DELETE", "DELETE"],
        ],
      },
      {
        type: "input_value",
        name: "DATA",
        text: "Hello World",
      },
    ],
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    colour: "#33CCFF",
  },
  //---Teachable Machine----
  {
    type: "teachable_initialize",
    colour: "8AB4F8",
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    message0: "Initialize Camera AI Port %1",
    args0: [
      {
        type: "field_dropdown",
        name: "port",
        options: port_1_8,
      },
    ],
  },
  {
    type: "teachable_update",
    colour: "8AB4F8",
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    message0: "Update Detect Result",
  },
  {
    type: "teachable_detect",
    colour: "8AB4F8",
    inputsInline: null,
    message0: "Detect %1 with Accuracy > %2",
    args0: [
      {
        type: "field_input",
        name: "label",
        text: "String",
      },
      {
        type: "input_value",
        name: "accuracy",
      },
    ],
    output: "Boolean",
  },
  {
    type: "teachable_read",
    colour: "8AB4F8",
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    message0: "Read Detect Result",
  },
  {
    type: "teachable_score",
    colour: "8AB4F8",
    inputsInline: true,
    previousStatement: null,
    nextStatement: null,
    message0: "Read Detect Score",
  },
]);
