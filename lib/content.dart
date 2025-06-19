// ignore: unused_import
import 'package:flutter/material.dart';

const String initialXml =
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="event_program_starts" x="70" y="30" >XML</></block></xml>';

const Map<String, dynamic> initialJson = {
  'blocks': {
    'languageVersion': 0,
    'blocks': [
      {
        'type': 'event_program_starts',
        'x': 70,
        'y': 30,
        'fields': {'TEXT': 'JSON'},
        'deletable': false,
        'movable': true,
      },
    ],
  },
};

const Map<String, dynamic> newState = {
  'blocks': {
    'languageVersion': 0,
    'blocks': [
      {
        'type': 'text',
        'x': 70,
        'y': 30,
        'fields': {'TEXT': 'JSON'},
      },
      {
        'type': 'text',
        'x': 70,
        'y': 70,
        'fields': {'TEXT': 'NEW'},
      },
    ],
  },
};

// const Map<String, dynamic> initialToolboxJson = {
//   'kind': 'categoryToolbox',
//   'contents': [
//     {
//       'kind': 'category',
//       'name': 'Logic',
//       'colour': 210,
//       'contents': [
//         {'kind': 'block', 'type': 'controls_if'},
//         {
//           'kind': 'block',
//           'blockxml':
//               '<block type="logic_compare"><field name="OP">EQ</field></block>',
//         },
//         {
//           'kind': 'block',
//           'blockxml':
//               '<block type="logic_operation"><field name="OP">AND</field></block>',
//         },
//         {'kind': 'block', 'type': 'logic_negate'},
//         {
//           'kind': 'block',
//           'blockxml':
//               '<block type="logic_boolean"><field name="BOOL">TRUE</field></block>',
//         },
//         {'kind': 'block', 'type': 'logic_null'},
//         {'kind': 'block', 'type': 'logic_ternary'},
//       ],
//     },
//     {
//       'kind': 'category',
//       'name': 'Loops',
//       'colour': 120,
//       'contents': [
//         {
//           'kind': 'block',
//           'blockxml': '''
//             <block type="controls_repeat_ext">
//                   <value name="TIMES">
//                     <shadow type="math_number">
//                       <field name="NUM">10</field>
//                     </shadow>
//                   </value>
//                 </block>
//             ''',
//         },
//         {
//           'kind': 'block',
//           'blockxml': '''
//                 <block type="controls_whileUntil">
//                   <field name="MODE">WHILE</field>
//                 </block>
//             ''',
//         },
//         {
//           'kind': 'block',
//           'blockxml': '''
//             <block type="controls_for">
//               <field name="VAR" id="C(8;cYCF}~vSgkxzJ+{O" variabletype="">i</field>
//               <value name="FROM">
//                 <shadow type="math_number">
//                   <field name="NUM">1</field>
//                 </shadow>
//               </value>
//               <value name="TO">
//                 <shadow type="math_number">
//                   <field name="NUM">10</field>
//                 </shadow>
//               </value>
//               <value name="BY">
//                 <shadow type="math_number">
//                   <field name="NUM">1</field>
//                 </shadow>
//               </value>
//             </block>
//           ''',
//         },
//         {
//           'kind': 'block',
//           'blockxml': '''
//             <block type="controls_forEach">
//               <field name="VAR" id="Cg!CSk/ZJo2XQN3=VVrz" variabletype="">j</field>
//             </block>
//             ''',
//         },
//         {
//           'kind': 'block',
//           'blockxml': '''
//             <block type="controls_flow_statements">
//               <field name="FLOW">BREAK</field>
//             </block>
//             ''',
//         },
//       ],
//     },
//     {
//       'kind': 'category',
//       'name': 'Math',
//       'colour': 230,
//       'contents': [
//         {
//           'kind': 'block',
//           'blockxml': '''
//             <block type="math_round">
//               <field name="OP">ROUND</field>
//               <value name="NUM">
//                 <shadow type="math_number">
//                   <field name="NUM">3.1</field>
//                 </shadow>
//               </value>
//             </block>
//             ''',
//         },
//         {
//           'kind': 'block',
//           'blockxml': '''
//             <block type="math_number">
//               <field name="NUM">0</field>
//             </block>
//             ''',
//         },
//         {
//           'kind': 'block',
//           'blockxml': '''
//             <block type="math_single">
//               <field name="OP">ROOT</field>
//               <value name="NUM">
//                 <shadow type="math_number">
//                   <field name="NUM">9</field>
//                 </shadow>
//               </value>
//             </block>
//             ''',
//         },
//         {
//           'kind': 'block',
//           'blockxml': '''
//             <block type="math_trig">
//               <field name="OP">SIN</field>
//               <value name="NUM">
//                 <shadow type="math_number">
//                   <field name="NUM">45</field>
//                 </shadow>
//               </value>
//             </block>
//             ''',
//         },
//         {
//           'kind': 'block',
//           'blockxml': '''
//             <block type="math_constant">
//               <field name="CONSTANT">PI</field>
//             </block>
//             ''',
//         },
//         {
//           'kind': 'block',
//           'blockxml': '''
//             <block type="math_number_property">
//               <mutation divisor_input="false"></mutation>
//               <field name="PROPERTY">EVEN</field>
//               <value name="NUMBER_TO_CHECK">
//                 <shadow type="math_number">
//                   <field name="NUM">0</field>
//                 </shadow>
//               </value>
//             </block>
//             ''',
//         },
//         {
//           'kind': 'block',
//           'blockxml': '''
//             <block type="math_arithmetic">
//               <field name="OP">ADD</field>
//               <value name="A">
//                 <shadow type="math_number">
//                   <field name="NUM">1</field>
//                 </shadow>
//               </value>
//               <value name="B">
//                 <shadow type="math_number">
//                   <field name="NUM">1</field>
//                 </shadow>
//               </value>
//             </block>
//             ''',
//         },
//         {
//           'kind': 'block',
//           'blockxml': '''
//             <block type="math_on_list">
//               <mutation op="SUM"></mutation>
//               <field name="OP">SUM</field>
//             </block>
//             ''',
//         },
//         {
//           'kind': 'block',
//           'blockxml': '''
//             <block type="math_modulo">
//               <value name="DIVIDEND">
//                 <shadow type="math_number">
//                   <field name="NUM">64</field>
//                 </shadow>
//               </value>
//               <value name="DIVISOR">
//                 <shadow type="math_number">
//                   <field name="NUM">10</field>
//                 </shadow>
//               </value>
//             </block>
//             ''',
//         },
//         {
//           'kind': 'block',
//           'blockxml': '''
//             <block type="math_constrain">
//               <value name="VALUE">
//                 <shadow type="math_number">
//                   <field name="NUM">50</field>
//                 </shadow>
//               </value>
//               <value name="LOW">
//                 <shadow type="math_number">
//                   <field name="NUM">1</field>
//                 </shadow>
//               </value>
//               <value name="HIGH">
//                 <shadow type="math_number">
//                   <field name="NUM">100</field>
//                 </shadow>
//               </value>
//             </block>
//             ''',
//         },
//         {
//           'kind': 'block',
//           'blockxml': '''
//             <block type="math_random_int">
//               <value name="FROM">
//                 <shadow type="math_number">
//                   <field name="NUM">1</field>
//                 </shadow>
//               </value>
//               <value name="TO">
//                 <shadow type="math_number">
//                   <field name="NUM">100</field>
//                 </shadow>
//               </value>
//             </block>
//             ''',
//         },
//         {'kind': 'block', 'type': 'math_random_float'},
//       ],
//     },
//     {
//       'kind': 'category',
//       'name': 'Text',
//       'colour': 160,
//       'contents': [
//         {
//           'kind': 'block',
//           'blockxml': '''
//             <block type="text_charAt">
//               <mutation at="true"></mutation>
//               <field name="WHERE">FROM_START</field>
//               <value name="VALUE">
//                 <block type="variables_get">
//                   <field name="VAR" id="q@\$ZF(L?Zo/z`d{o.Bp!" variabletype="">text</field>
//                 </block>
//               </value>
//             </block>
//             ''',
//         },
//         {
//           'kind': 'block',
//           'blockxml': '''
//             <block type="text">
//               <field name="TEXT"></field>
//             </block>
//             ''',
//         },
//         {
//           'kind': 'block',
//           'blockxml': '''
//             <block type="text_append">
//               <field name="VAR" id=":};P,s[*|I8+L^-.EbRi" variabletype="">item</field>
//               <value name="TEXT">
//                 <shadow type="text">
//                   <field name="TEXT"></field>
//                 </shadow>
//               </value>
//             </block>
//             ''',
//         },
//         {
//           'kind': 'block',
//           'blockxml': '''
//             <block type="text_length">
//               <value name="VALUE">
//                 <shadow type="text">
//                   <field name="TEXT">abc</field>
//                 </shadow>
//               </value>
//             </block>
//             ''',
//         },
//         {
//           'kind': 'block',
//           'blockxml': '''
//             <block type="text_isEmpty">
//               <value name="VALUE">
//                 <shadow type="text">
//                   <field name="TEXT"></field>
//                 </shadow>
//               </value>
//             </block>
//             ''',
//         },
//         {
//           'kind': 'block',
//           'blockxml': '''
//             <block type="text_indexOf">
//               <field name="END">FIRST</field>
//               <value name="VALUE">
//                 <block type="variables_get">
//                   <field name="VAR" id="q@\$ZF(L?Zo/z`d{o.Bp!" variabletype="">text</field>
//                 </block>
//               </value>
//               <value name="FIND">
//                 <shadow type="text">
//                   <field name="TEXT">abc</field>
//                 </shadow>
//               </value>
//             </block>
//             ''',
//         },
//         {
//           'kind': 'block',
//           'blockxml': '''
//             <block type="text_join">
//               <mutation items="2"></mutation>
//             </block>
//             ''',
//         },
//         {
//           'kind': 'block',
//           'blockxml': '''
//             <block type="text_getSubstring">
//               <mutation at1="true" at2="true"></mutation>
//               <field name="WHERE1">FROM_START</field>
//               <field name="WHERE2">FROM_START</field>
//               <value name="STRING">
//                 <block type="variables_get">
//                   <field name="VAR" id="q@\$ZF(L?Zo/z`d{o.Bp!" variabletype="">text</field>
//                 </block>
//               </value>
//             </block>
//             ''',
//         },
//         {
//           'kind': 'block',
//           'blockxml': '''
//             <block type="text_changeCase">
//               <field name="CASE">UPPERCASE</field>
//               <value name="TEXT">
//                 <shadow type="text">
//                   <field name="TEXT">abc</field>
//                 </shadow>
//               </value>
//             </block>
//             ''',
//         },
//         {
//           'kind': 'block',
//           'blockxml': '''
//             <block type="text_trim">
//               <field name="MODE">BOTH</field>
//               <value name="TEXT">
//                 <shadow type="text">
//                   <field name="TEXT">abc</field>
//                 </shadow>
//               </value>
//             </block>
//             ''',
//         },
//         {
//           'kind': 'block',
//           'blockxml': '''
//             <block type="text_print">
//               <value name="TEXT">
//                 <shadow type="text">
//                   <field name="TEXT">abc</field>
//                 </shadow>
//               </value>
//             </block>
//             ''',
//         },
//         {
//           'kind': 'block',
//           'blockxml': '''
//             <block type="text_prompt_ext">
//               <mutation type="TEXT"></mutation>
//               <field name="TYPE">TEXT</field>
//               <value name="TEXT">
//                 <shadow type="text">
//                   <field name="TEXT">abc</field>
//                 </shadow>
//               </value>
//             </block>
//             ''',
//         },
//       ],
//     },
//     {
//       'kind': 'category',
//       'name': 'Lists',
//       'colour': 259,
//       'contents': [
//         {
//           'kind': 'block',
//           'blockxml': '''
//             <block type="lists_indexOf">
//               <field name="END">FIRST</field>
//               <value name="VALUE">
//                 <block type="variables_get">
//                   <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>
//                 </block>
//               </value>
//             </block>
//             ''',
//         },
//         {
//           'kind': 'block',
//           'blockxml': '''
//             <block type="lists_create_with">
//               <mutation items="0"></mutation>
//             </block>
//             ''',
//         },
//         {
//           'kind': 'block',
//           'blockxml': '''
//             <block type="lists_repeat">
//               <value name="NUM">
//                 <shadow type="math_number">
//                   <field name="NUM">5</field>
//                 </shadow>
//               </value>
//             </block>
//             ''',
//         },
//         {'kind': 'block', 'type': 'lists_length'},
//         {'kind': 'block', 'type': 'lists_isEmpty'},
//         {
//           'kind': 'block',
//           'blockxml': '''
//             <block type="lists_create_with">
//               <mutation items="3"></mutation>
//             </block>
//             ''',
//         },
//         {
//           'kind': 'block',
//           'blockxml': '''
//             <block type="lists_getIndex">
//               <mutation statement="false" at="true"></mutation>
//               <field name="MODE">GET</field>
//               <field name="WHERE">FROM_START</field>
//               <value name="VALUE">
//                 <block type="variables_get">
//                   <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>
//                 </block>
//               </value>
//             </block>
//             ''',
//         },
//         {
//           'kind': 'block',
//           'blockxml': '''
//             <block type="lists_setIndex">
//               <mutation at="true"></mutation>
//               <field name="MODE">SET</field>
//               <field name="WHERE">FROM_START</field>
//               <value name="LIST">
//                 <block type="variables_get">
//                   <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>
//                 </block>
//               </value>
//             </block>
//             ''',
//         },
//         {
//           'kind': 'block',
//           'blockxml': '''
//             <block type="lists_getSublist">
//               <mutation at1="true" at2="true"></mutation>
//               <field name="WHERE1">FROM_START</field>
//               <field name="WHERE2">FROM_START</field>
//               <value name="LIST">
//                 <block type="variables_get">
//                   <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>
//                 </block>
//               </value>
//             </block>
//             ''',
//         },
//         {
//           'kind': 'block',
//           'blockxml': '''
//             <block type="lists_split">
//               <mutation mode="SPLIT"></mutation>
//               <field name="MODE">SPLIT</field>
//               <value name="DELIM">
//                 <shadow type="text">
//                   <field name="TEXT">,</field>
//                 </shadow>
//               </value>
//             </block>
//             ''',
//         },
//         {
//           'kind': 'block',
//           'blockxml': '''
//             <block type="lists_sort">
//               <field name="TYPE">NUMERIC</field>
//               <field name="DIRECTION">1</field>
//             </block>
//             ''',
//         },
//       ],
//     },
//     {
//       'kind': 'category',
//       'name': 'Test',
//       'colour': 19,
//       'contents': [
//         {
//           'kind': 'block',
//           'blockxml': '''
//                   <block type="int_to_string">
//                   </block>
//                   ''',
//         },
//         {'kind': 'block', 'type': 'custom_if'},
//         {'kind': 'block', 'type': "event_program_starts"},
//       ],
//     },
//     {'kind': 'sep'},
//     {
//       'kind': 'category',
//       'name': 'Custom Button',
//       'colour': 19,
//       'contents': [
//         {
//           'kind': 'button',
//           'text': 'A button',
//           'callbackKey': 'myFirstButtonPressed',
//         },
//       ],
//     },
//     {
//       'kind': 'category',
//       'name': 'Variables',
//       'custom': 'VARIABLE',
//       'colour': 330,
//     },
//     {
//       'kind': 'category',
//       'name': 'Functions',
//       'custom': 'PROCEDURE',
//       'colour': 290,
//     },
//   ],
// };

// const String initialToolboxXml = '''
//   <xml xmlns="http://www.w3.org/1999/xhtml" id="toolbox" style="display: none;">
//   <category name="Logic" colour="#5C81A6">
//   <block type="controls_if"></block>
//   <block type="logic_compare">
//     <field name="OP">EQ</field>
//   </block>
//   <block type="logic_operation">
//     <field name="OP">AND</field>
//   </block>
//   <block type="logic_negate"></block>
//   <block type="logic_boolean">
//     <field name="BOOL">TRUE</field>
//   </block>
//   <block type="logic_null"></block>
//   <block type="logic_ternary"></block>
//     </category>
//     <category name="Loops" colour="#5CA65C">
//   <block type="controls_repeat_ext">
//     <value name="TIMES">
//       <shadow type="math_number">
//         <field name="NUM">10</field>
//       </shadow>
//     </value>
//   </block>
//   <block type="controls_whileUntil">
//     <field name="MODE">WHILE</field>
//   </block>
//   <block type="controls_for">
//     <field name="VAR" id="C(8;cYCF}~vSgkxzJ+{O" variabletype="">i</field>
//     <value name="FROM">
//       <shadow type="math_number">
//         <field name="NUM">1</field>
//       </shadow>
//     </value>
//     <value name="TO">
//       <shadow type="math_number">
//         <field name="NUM">10</field>
//       </shadow>
//     </value>
//     <value name="BY">
//       <shadow type="math_number">
//         <field name="NUM">1</field>
//       </shadow>
//     </value>
//   </block>
//   <block type="controls_forEach">
//     <field name="VAR" id="Cg!CSk/ZJo2XQN3=VVrz" variabletype="">j</field>
//   </block>
//   <block type="controls_flow_statements">
//     <field name="FLOW">BREAK</field>
//   </block>
//     </category>
//     <category name="Math" colour="#5C68A6">
//   <block type="math_round">
//     <field name="OP">ROUND</field>
//     <value name="NUM">
//       <shadow type="math_number">
//         <field name="NUM">3.1</field>
//       </shadow>
//     </value>
//   </block>
//   <block type="math_number">
//     <field name="NUM">0</field>
//   </block>
//   <block type="math_single">
//     <field name="OP">ROOT</field>
//     <value name="NUM">
//       <shadow type="math_number">
//         <field name="NUM">9</field>
//       </shadow>
//     </value>
//   </block>
//   <block type="math_trig">
//     <field name="OP">SIN</field>
//     <value name="NUM">
//       <shadow type="math_number">
//         <field name="NUM">45</field>
//       </shadow>
//     </value>
//   </block>
//   <block type="math_constant">
//     <field name="CONSTANT">PI</field>
//   </block>
//   <block type="math_number_property">
//     <mutation divisor_input="false"></mutation>
//     <field name="PROPERTY">EVEN</field>
//     <value name="NUMBER_TO_CHECK">
//       <shadow type="math_number">
//         <field name="NUM">0</field>
//       </shadow>
//     </value>
//   </block>
//   <block type="math_arithmetic">
//     <field name="OP">ADD</field>
//     <value name="A">
//       <shadow type="math_number">
//         <field name="NUM">1</field>
//       </shadow>
//     </value>
//     <value name="B">
//       <shadow type="math_number">
//         <field name="NUM">1</field>
//       </shadow>
//     </value>
//   </block>
//   <block type="math_on_list">
//     <mutation op="SUM"></mutation>
//     <field name="OP">SUM</field>
//   </block>
//   <block type="math_modulo">
//     <value name="DIVIDEND">
//       <shadow type="math_number">
//         <field name="NUM">64</field>
//       </shadow>
//     </value>
//     <value name="DIVISOR">
//       <shadow type="math_number">
//         <field name="NUM">10</field>
//       </shadow>
//     </value>
//   </block>
//   <block type="math_constrain">
//     <value name="VALUE">
//       <shadow type="math_number">
//         <field name="NUM">50</field>
//       </shadow>
//     </value>
//     <value name="LOW">
//       <shadow type="math_number">
//         <field name="NUM">1</field>
//       </shadow>
//     </value>
//     <value name="HIGH">
//       <shadow type="math_number">
//         <field name="NUM">100</field>
//       </shadow>
//     </value>
//   </block>
//   <block type="math_random_int">
//     <value name="FROM">
//       <shadow type="math_number">
//         <field name="NUM">1</field>
//       </shadow>
//     </value>
//     <value name="TO">
//       <shadow type="math_number">
//         <field name="NUM">100</field>
//       </shadow>
//     </value>
//   </block>
//   <block type="math_random_float"></block>
//     </category>
//     <category name="Text" colour="#5CA68D">
//   <block type="text_charAt">
//     <mutation at="true"></mutation>
//     <field name="WHERE">FROM_START</field>
//     <value name="VALUE">
//       <block type="variables_get">
//         <field name="VAR" id="q@\$ZF(L?Zo/z`d{o.Bp!" variabletype="">text</field>
//       </block>
//     </value>
//   </block>
//   <block type="text">
//     <field name="TEXT"></field>
//   </block>
//   <block type="text_append">
//     <field name="VAR" id=":};P,s[*|I8+L^-.EbRi" variabletype="">item</field>
//     <value name="TEXT">
//       <shadow type="text">
//         <field name="TEXT"></field>
//       </shadow>
//     </value>
//   </block>
//   <block type="text_length">
//     <value name="VALUE">
//       <shadow type="text">
//         <field name="TEXT">abc</field>
//       </shadow>
//     </value>
//   </block>
//   <block type="text_isEmpty">
//     <value name="VALUE">
//       <shadow type="text">
//         <field name="TEXT"></field>
//       </shadow>
//     </value>
//   </block>
//   <block type="text_indexOf">
//     <field name="END">FIRST</field>
//     <value name="VALUE">
//       <block type="variables_get">
//         <field name="VAR" id="q@\$ZF(L?Zo/z`d{o.Bp!" variabletype="">text</field>
//       </block>
//     </value>
//     <value name="FIND">
//       <shadow type="text">
//         <field name="TEXT">abc</field>
//       </shadow>
//     </value>
//   </block>
//   <block type="text_join">
//     <mutation items="2"></mutation>
//   </block>
//   <block type="text_getSubstring">
//     <mutation at1="true" at2="true"></mutation>
//     <field name="WHERE1">FROM_START</field>
//     <field name="WHERE2">FROM_START</field>
//     <value name="STRING">
//       <block type="variables_get">
//         <field name="VAR" id="q@\$ZF(L?Zo/z`d{o.Bp!" variabletype="">text</field>
//       </block>
//     </value>
//   </block>
//   <block type="text_changeCase">
//     <field name="CASE">UPPERCASE</field>
//     <value name="TEXT">
//       <shadow type="text">
//         <field name="TEXT">abc</field>
//       </shadow>
//     </value>
//   </block>
//   <block type="text_trim">
//     <field name="MODE">BOTH</field>
//     <value name="TEXT">
//       <shadow type="text">
//         <field name="TEXT">abc</field>
//       </shadow>
//     </value>
//   </block>
//   <block type="text_print">
//     <value name="TEXT">
//       <shadow type="text">
//         <field name="TEXT">abc</field>
//       </shadow>
//     </value>
//   </block>
//   <block type="text_prompt_ext">
//     <mutation type="TEXT"></mutation>
//     <field name="TYPE">TEXT</field>
//     <value name="TEXT">
//       <shadow type="text">
//         <field name="TEXT">abc</field>
//       </shadow>
//     </value>
//   </block>
//     </category>
//     <category name="Lists" colour="#745CA6">
//   <block type="lists_indexOf">
//     <field name="END">FIRST</field>
//     <value name="VALUE">
//       <block type="variables_get">
//         <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>
//       </block>
//     </value>
//   </block>
//   <block type="lists_create_with">
//     <mutation items="0"></mutation>
//   </block>
//   <block type="lists_repeat">
//     <value name="NUM">
//       <shadow type="math_number">
//         <field name="NUM">5</field>
//       </shadow>
//     </value>
//   </block>
//   <block type="lists_length"></block>
//   <block type="lists_isEmpty"></block>
//   <block type="lists_create_with">
//     <mutation items="3"></mutation>
//   </block>
//   <block type="lists_getIndex">
//     <mutation statement="false" at="true"></mutation>
//     <field name="MODE">GET</field>
//     <field name="WHERE">FROM_START</field>
//     <value name="VALUE">
//       <block type="variables_get">
//         <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>
//       </block>
//     </value>
//   </block>
//   <block type="lists_setIndex">
//     <mutation at="true"></mutation>
//     <field name="MODE">SET</field>
//     <field name="WHERE">FROM_START</field>
//     <value name="LIST">
//       <block type="variables_get">
//         <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>
//       </block>
//     </value>
//   </block>
//   <block type="lists_getSublist">
//     <mutation at1="true" at2="true"></mutation>
//     <field name="WHERE1">FROM_START</field>
//     <field name="WHERE2">FROM_START</field>
//     <value name="LIST">
//       <block type="variables_get">
//         <field name="VAR" id="e`(L;x,.j[[XN`F33Q5." variabletype="">list</field>
//       </block>
//     </value>
//   </block>
//   <block type="lists_split">
//     <mutation mode="SPLIT"></mutation>
//     <field name="MODE">SPLIT</field>
//     <value name="DELIM">
//       <shadow type="text">
//         <field name="TEXT">,</field>
//       </shadow>
//     </value>
//   </block>
//   <block type="lists_sort">
//     <field name="TYPE">NUMERIC</field>
//     <field name="DIRECTION">1</field>
//   </block>
//     </category>
//     <category name="Colour" colour="#A6745C">
//   <block type="colour_picker">
//     <field name="COLOUR">#ff0000</field>
//   </block>
//   <block type="colour_random"></block>
//   <block type="colour_rgb">
//     <value name="RED">
//       <shadow type="math_number">
//         <field name="NUM">100</field>
//       </shadow>
//     </value>
//     <value name="GREEN">
//       <shadow type="math_number">
//         <field name="NUM">50</field>
//       </shadow>
//     </value>
//     <value name="BLUE">
//       <shadow type="math_number">
//         <field name="NUM">0</field>
//       </shadow>
//     </value>
//   </block>
//   <block type="colour_blend">
//     <value name="COLOUR1">
//       <shadow type="colour_picker">
//         <field name="COLOUR">#ff0000</field>
//       </shadow>
//     </value>
//     <value name="COLOUR2">
//       <shadow type="colour_picker">
//         <field name="COLOUR">#3333ff</field>
//       </shadow>
//     </value>
//     <value name="RATIO">
//       <shadow type="math_number">
//         <field name="NUM">0.5</field>
//       </shadow>
//     </value>
//   </block>
//     </category>
//     <sep></sep>
//     <category name="Variables" colour="#A65C81" custom="VARIABLE"></category>
//     <category name="Functions" colour="#9A5CA6" custom="PROCEDURE"></category>
//   </xml>
//   ''';

// const List<Map<String, dynamic>> initialToolboxCategories = [
//   {
//     'name': 'Controls',
//     'blocks': [
//       {'type': 'controls_if'},
//       {
//         'type': 'controls_repeat_ext',
//         'values': {
//           'TIMES': {
//             'type': 'math_number',
//             'shadow': true,
//             'fields': {'NUM': 10},
//           },
//         },
//         'statements': {
//           'DO': {
//             'type': 'text_print',
//             'shadow': true,
//             'values': {
//               'text': {
//                 'type': 'text',
//                 'shadow': true,
//                 'fields': {'text': 'abc'},
//               },
//             },
//           },
//         },
//       },
//     ],
//   },
//   {
//     'name': 'Text',
//     'blocks': [
//       {'type': 'text'},
//       {
//         'type': 'text_print',
//         'values': {
//           'text': {
//             'type': 'text',
//             'shadow': true,
//             'fields': {'text': 'abc'},
//           },
//         },
//       },
//     ],
//   },
// ];

const Map<String, dynamic> initialToolboxJson = {
  'kind': 'categoryToolbox',
  'contents': [
    {
      'kind': 'category',
      'name': 'events',
      'colour': '#FFD500',
      'contents': [
        {'kind': 'block', 'type': 'event_program_starts'},
      ],
    },
    //------------------------------------------Control---------------------------------
    {
      'kind': 'category',
      'name': 'control',
      'colour': 'FFAB19',
      'contents': [
        //------------------------------------------If---------------------------------
        {'kind': 'block', 'type': 'if'},
        {'kind': 'block', 'type': 'if_else'},

        //------------------------------------------Delay---------------------------------
        {
          'kind': 'block',
          'type': 'delay',
          'inputs': {
            'number': {
              'shadow': {
                'type': 'math_number',
                'fields': {'NUM': 0},
              },
            },
          },
        },
        {'kind': 'block', 'type': 'delay_until'},

        //------------------------------------------Loop---------------------------------
        {
          'kind': 'block',
          'type': 'loop_times',
          'inputs': {
            'number': {
              'shadow': {
                'type': 'math_number',
                'fields': {'NUM': 10},
              },
            },
          },
        },
        {'kind': 'block', 'type': 'loop_forever'},
        {'kind': 'block', 'type': 'loop_until'},
      ],
    },
    //------------------------------------------Operators---------------------------------
    {
      'kind': 'category',
      'name': 'Operators',
      'colour': '40BF4A',
      'contents': [
        //--------------------------------------------Operators-------------------
        {
          "kind": "block",
          "type": "operators",
          "inputs": {
            "number1": {
              "shadow": {
                "type": "math_number",
                "fields": {"NUM": 0},
              },
            },
            "number2": {
              "shadow": {
                "type": "math_number",
                "fields": {"NUM": 0},
              },
            },
          },
        },
        //--------------------------------------------compare-------------------
        {
          "kind": "block",
          "type": "compare",
          "inputs": {
            "number1": {
              "shadow": {
                "type": "math_number",
                "fields": {"NUM": 0},
              },
            },
            "number2": {
              "shadow": {
                "type": "math_number",
                "fields": {"NUM": 0},
              },
            },
          },
        },
        //------compare AND OR NOT----------
        {"kind": "block", "type": "compare_and"},
        {"kind": "block", "type": "compare_or"},
        {"kind": "block", "type": "compare_not"},
        //----------------------Formula-----------------
        {
          "kind": "block",
          "type": "formula",
          "inputs": {
            "number": {
              "shadow": {
                "type": "math_number",
                "fields": {"NUM": 0},
              },
            },
          },
        },
        //--------------------------------------------random-------------------
        {
          "kind": "block",
          'type': 'random',
          "inputs": {
            "FROM": {
              "shadow": {
                "type": "math_number",
                "fields": {"NUM": 1},
              },
            },
            "TO": {
              "shadow": {
                "type": "math_number",
                "fields": {"NUM": 10},
              },
            },
          },
        },
      ],
    },

    //---------Led--------------
    {
      'kind': 'category',
      'name': 'Led',
      'colour': '4C97FF',
      'contents': [
        //------------------Led---------------
        {'kind': 'block', 'type': 'led_on'},
        {'kind': 'block', 'type': 'led_off'},
        {'kind': 'block', 'type': 'led_all_on'},
        {'kind': 'block', 'type': 'led_all_off'},
        {'kind': 'block', 'type': 'led_button_on'},
        {'kind': 'block', 'type': 'led_IR_on'},
      ],
    },
    //------------Module--------
    {
      'kind': 'category',
      'name': 'Module',
      'colour': 'B3B3FF',
      'contents': [
        {'kind': 'block', 'type': 'init_module'},
        {'kind': 'block', 'type': 'traffic_light'},
        {'kind': 'block', 'type': 'joystick'},
        {'kind': 'block', 'type': 'volume'},
        {'kind': 'block', 'type': 'get_button'},
      ],
    },
    //--------------Sensor------
    {
      'kind': 'category',
      'name': 'Sensor',
      'colour': '148F77',
      'contents': [
        {'kind': 'block', 'type': 'init_sensor'},
        {'kind': 'block', 'type': 'ultrasonic'},
        {'kind': 'block', 'type': 'line_sensor'},
        {'kind': 'block', 'type': 'ir_sensor'},
        {'kind': 'block', 'type': 'touch_sensor'},
        {'kind': 'sep', 'gap': 50},
        {'kind': 'block', 'type': 'temp_sensor'},
        {'kind': 'block', 'type': 'soil_hum_sensor'},
        {'kind': 'block', 'type': 'gas_sensor'},
        {'kind': 'block', 'type': 'gryro_sensor'},
        {'kind': 'block', 'type': 'color_sensor'},
        {'kind': 'block', 'type': 'lux_sensor'},
        {'kind': 'block', 'type': 'light_sensor'},
      ],
    },
    //-------------Display----------
    {
      'kind': "category",
      'name': 'Display',
      'colour': 'B99095',
      'contents': [
        {'kind': 'block', 'type': 'lcd_init'},
        {
          'kind': 'block',
          'type': 'lcd_number',
          'inputs': {
            'column': {
              'shadow': {
                'type': 'math_number',
                'fields': {'NUM': 0},
              },
            },
            'cell': {
              'shadow': {
                'type': 'math_number',
                'fields': {'NUM': 0},
              },
            },
            'number': {
              'shadow': {
                'type': 'math_number',
                'fields': {'NUM': 0},
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'lcd_string',
          'inputs': {
            'column': {
              'shadow': {
                'type': 'math_number',
                'fields': {'NUM': 0},
              },
            },
            'cell': {
              'shadow': {
                'type': 'math_number',
                'fields': {'NUM': 0},
              },
            },
            'string': {
              'shadow': {
                'type': 'text',
                'fields': {'TEXT': 'Hello'},
              },
            },
          },
        },
        {'kind': 'block', 'type': 'lcd_clear'},
      ],
    },
    //-------Motions------
    {
      'kind': 'category',
      'name': 'Motions',
      'colour': '#7CF3A0',
      'contents': [
        {
          'kind': 'block',
          'type': 'motor',
          'inputs': {
            'number': {
              'shadow': {
                'type': 'math_number',
                'fields': {'NUM': 0},
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'servo',
          'inputs': {
            'number': {
              'shadow': {
                'type': 'math_number',
                'fields': {'NUM': 90},
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'encoder',
          'inputs': {
            'number': {
              'shadow': {
                'type': 'math_number',
                'fields': {'NUM': 0},
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'tuning_encoder',
          'inputs': {
            'number': {
              'shadow': {
                'type': 'math_number',
                'fields': {'NUM': 0},
              },
            },
            'number1': {
              'shadow': {
                'type': 'math_number',
                'fields': {'NUM': 0},
              },
            },
            'number2': {
              'shadow': {
                'type': 'math_number',
                'fields': {'NUM': 0},
              },
            },
          },
        },
        {'kind': 'block', 'type': 'posi_encoder'},
      ],
    },
    //-----------Serial---------
    {
      'kind': 'category',
      'name': 'Serial',
      'colour': '#9966FF',
      'contents': [
        {
          'kind': 'block',
          'type': 'print_serial',
          'inputs': {
            'TEXT': {
              'shadow': {
                'type': 'text',
                'fields': {'TEXT': 'Hello World'},
              },
            },
          },
        },
        {'kind': 'block', 'type': 'data_length_serial'},
        {'kind': 'block', 'type': 'read_data_serial'},
      ],
    },
    //-------------Data--------
    {
      'kind': 'category',
      'name': 'Data',
      'colour': '#C15CC1',
      'contents': [
        {
          'kind': 'block',
          'type': 'data_map',
          'inputs': {
            'number1': {
              'shadow': {
                'type': 'math_number',
                'fields': {'NUM': 50},
              },
            },
            'number2': {
              'shadow': {
                'type': 'math_number',
                'fields': {'NUM': 1},
              },
            },
            'number3': {
              'shadow': {
                'type': 'math_number',
                'fields': {'NUM': 100},
              },
            },
            'number4': {
              'shadow': {
                'type': 'math_number',
                'fields': {'NUM': 1},
              },
            },
            'number5': {
              'shadow': {
                'type': 'math_number',
                'fields': {'NUM': 1000},
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'data_constrain',
          'inputs': {
            'number1': {
              'shadow': {
                'type': 'math_number',
                'fields': {'NUM': 50},
              },
            },
            'number2': {
              'shadow': {
                'type': 'math_number',
                'fields': {'NUM': 1},
              },
            },
            'number3': {
              'shadow': {
                'type': 'math_number',
                'fields': {'NUM': 100},
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'data_convert_number',
          'inputs': {
            'number1': {
              'shadow': {
                'type': 'math_number',
                'fields': {'NUM': 123},
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'data_convert_number_character',
          'inputs': {
            'number1': {
              'shadow': {
                'type': 'math_number',
                'fields': {'NUM': 97},
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'data_convert_character_number',
          'inputs': {
            'TEXT': {
              'shadow': {
                'type': 'text',
                'fields': {'TEXT': 'a'},
              },
            },
          },
        },
      ],
    },

    ///-------------bluetooth-----
    {
      "kind": "category",
      "name": "Bluetooth",
      "colour": "#CC0000",
      "contents": [
        {"kind": "block", "type": "bluetooth_initialize"},
        {
          "kind": "block",
          "type": "bluetooth_print",
          "inputs": {
            'TEXT': {
              'shadow': {
                'type': 'text',
                'fields': {'TEXT': 'Hello World'},
              },
            },
          },
        },
        {"kind": "block", "type": "bluetooth_available"},
        {"kind": "block", "type": "bluetooth_read"},
      ],
    },
    //----wifi----
    {
      "kind": "category",
      "name": "WiFi & HTTP",
      "colour": "#33CCFF",
      "contents": [
        {"kind": "block", "type": "wifi_initialize"},
        {
          "kind": "block",
          "type": "http_request",
          "inputs": {
            'DATA': {
              'shadow': {
                'type': 'text',
                'fields': {'TEXT': 'Hello World'},
              },
            },
          },
        },
      ],
    },
    //--Teachable Machine----
    {
      'kind': 'category',
      'name': "Teachable Machine",
      'colour': '#8AB4F8',
      'contents': [
        {"kind": "block", 'type': 'teachable_initialize'},
        {"kind": "block", 'type': 'teachable_update'},
        {
          "kind": "block",
          'type': 'teachable_detect',
          "inputs": {
            'accuracy': {
              'shadow': {
                'type': 'math_number',
                'fields': {'NUM': 0},
              },
            },
          },
        },
        {"kind": "block", 'type': 'teachable_read'},
        {"kind": "block", 'type': 'teachable_score'},
      ],
    },
    //-----Variables -----Functions------
    {'kind': 'sep'},
    {
      'kind': 'category',
      'name': 'Variables',
      'custom': 'VARIABLE',
      'colour': 330,
    },

    {
      'kind': 'category',
      'name': 'Functions',
      'custom': 'PROCEDURE',
      'colour': 290,
    },
  ],
};
