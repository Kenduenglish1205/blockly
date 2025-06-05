import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_blockly_plus/flutter_blockly_plus.dart';
import 'content.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  SystemChrome.setEnabledSystemUIMode(SystemUiMode.manual, overlays: []);
  runApp(
    MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(useMaterial3: true, colorSchemeSeed: Colors.lightBlue),
      home: const WebViewApp(),
    ),
  );
}

class WebViewApp extends StatefulWidget {
  const WebViewApp({Key? key}) : super(key: key);

  @override
  State<WebViewApp> createState() => _WebViewAppState();
}

class _WebViewAppState extends State<WebViewApp> {
  bool isSwitched = false; // show code

  // bool _loadproject = false;
  String _generatedCode = '';
  // ignore: unused_field
  String _xmlworkspace = '';

  final BlocklyOptions workspaceConfiguration = BlocklyOptions.fromJson(const {
    'grid': {'spacing': 0, 'length': 0, 'colour': '#ccc', 'snap': true},
    'toolbox': initialToolboxJson,
    // null safety example
    'collapse': null,
    'comments': null,
    'css': null,
    'disable': null,
    'horizontalLayout': null,
    'maxBlocks': null,
    'maxInstances': null,
    'media': null,
    'modalInputs': null,
    'move': null,
    'oneBasedIndex': null,
    'readOnly': null,
    'renderer': 'zelos',
    'rendererOverrides': null,
    'rtl': null,
    'scrollbars': null,
    'sounds': null,
    'theme': null,
    'toolboxPosition': null,
    'trashcan': false,
    'maxTrashcanContents': null,
    'plugins': null,
    'zoom': {
      'controls': true,
      'wheel': false,
      'startScale': 1,
      'maxScale': 1.0,
      'minScale': 0.5,
      'scaleSpeed': 0.6,
    },
    'parentWorkspace': null,
  });

  void onInject(BlocklyData data) {}

  void onChange(BlocklyData data) {
    setState(() {
      // Check if there are any blocks in the workspace
      if (data.js != null && data.js!.isNotEmpty) {
        const import = "import kulbot.py\n\nRob = kulbot.KULBOT \n\n";
        _generatedCode =
            import + data.python!; // Update with the generated code
      } else {
        _generatedCode = ''; // No blocks, so clear the generated code
      }
      //_generatedCode = jsonEncode(data);
      _xmlworkspace = data.xml ?? '';
    });
    debugPrint('onChange: ${data.xml}\n${jsonEncode(data.json)}\n${data.dart}');
  }

  void onDispose(BlocklyData data) {}

  void onError(dynamic err) {
    debugPrint('onError: $err');
  }

  Future<List<String>> loadAddons() async {
    List<String> addons = [];

    addons.add(await rootBundle.loadString("assets/blocks/kulbot_block.js"));
    addons.add(await rootBundle.loadString("assets/blocks/kulbot_vm_js.js"));
    addons.add(
      await rootBundle.loadString("assets/blocks/kulbot_vm_python.js"),
    );
    return addons;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Programming'),
        backgroundColor: Colors.lightBlue,
        actions: [
          Switch(
            value: isSwitched,
            onChanged: (value) {
              setState(() {
                isSwitched = value;
              });
            },
            thumbColor: MaterialStateProperty.all(Colors.black),
            trackColor: MaterialStateProperty.resolveWith<Color>((states) {
              return isSwitched ? Colors.white : Colors.white;
            }),
            thumbIcon: MaterialStateProperty.resolveWith<Icon?>((states) {
              return Icon(
                isSwitched ? Icons.code : Icons.extension,
                color: Colors.white,
                size: 16,
              );
            }),
          ),
          IconButton(
            icon: const Icon(Icons.save),
            onPressed: () {
              // save
            },
          ),
          IconButton(
            icon: const Icon(Icons.settings),
            onPressed: () {
              // setting
            },
          ),
          IconButton(
            icon: const Icon(Icons.bluetooth),
            onPressed: () {
              // bluetooth
            },
          ),
          IconButton(
            icon: const Icon(Icons.list_rounded),
            onPressed: () {
              // menu
            },
          ),
        ],
      ),
      body: SafeArea(
        child: Row(
          children: [
            Expanded(
              flex: 3,
              child: FutureBuilder<List<String>>(
                future: loadAddons(),
                builder: (context, snapshot) {
                  if (snapshot.hasData) {
                    return BlocklyEditorWidget(
                      workspaceConfiguration: workspaceConfiguration,
                      initial: initialXml,
                      onInject: onInject,
                      onChange: onChange,
                      onDispose: onDispose,
                      onError: onError,
                      addons: snapshot.data!,
                      debug: false,
                    );
                  } else if (snapshot.hasError) {
                    return Center(child: Text('Error: ${snapshot.error}'));
                  }
                  return const SizedBox.shrink();
                },
              ),
            ),
            AnimatedContainer(
              duration: const Duration(milliseconds: 0),
              width: isSwitched ? MediaQuery.of(context).size.width : 0,
              height: isSwitched ? MediaQuery.of(context).size.height : 0,
              padding: const EdgeInsets.all(8.0),
              decoration: BoxDecoration(
                border: Border.all(color: Colors.grey),
                borderRadius: BorderRadius.circular(8.0),
                color: Colors.white,
              ),
              child: SingleChildScrollView(
                child: Text(
                  _generatedCode.isNotEmpty
                      ? _generatedCode
                      : '', // Display code if available
                  style: const TextStyle(fontSize: 14, fontFamily: 'Monospace'),
                ),
              ),
            ),
          ],
        ),

        // child: FutureBuilder<List<String>>(

        //   future: loadAddons(),
        //   builder: (context, snapshot) {
        //     if (snapshot.hasData) {
        //       return BlocklyEditorWidget(
        //         workspaceConfiguration: workspaceConfiguration,
        //         initial: initialXml,
        //         onInject: onInject,
        //         onChange: onChange,
        //         onDispose: onDispose,
        //         onError: onError,
        //         addons: snapshot.data!,
        //         debug: false,
        //       );
        //     } else {
        //       return const Center(child: CircularProgressIndicator());
        //     }
        //   },

        // ),
      ),
    );
  }
}
