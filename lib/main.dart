import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_blockly_plus/flutter_blockly_plus.dart';
// import 'package:flutter_bluetooth_serial/flutter_bluetooth_serial.dart';
import 'content.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  // Ép màn hình ngang
  await SystemChrome.setPreferredOrientations([
    DeviceOrientation.landscapeLeft,
    DeviceOrientation.landscapeRight,
  ]);
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
  String _xmlworkspace = '';
  // Danh sách project
  List<String> projects = [];
  void _showProjectModal(BuildContext context) {
    showDialog(
      context: context,
      builder: (context) {
        final size = MediaQuery.of(context).size;
        return Dialog(
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(12),
          ),
          child: SafeArea(
            child: SingleChildScrollView(
              child: Padding(
                padding: const EdgeInsets.all(16),
                child: ConstrainedBox(
                  constraints: BoxConstraints(
                    maxWidth: size.width * 0.35,
                    // Không đặt maxHeight, để modal tự co giãn
                  ),
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      const Text(
                        "Block list",
                        style: TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: 20,
                        ),
                      ),
                      const SizedBox(height: 12),
                      Align(
                        alignment: Alignment.centerLeft,
                        child: ElevatedButton.icon(
                          icon: const Icon(Icons.add),
                          label: const Text("New"),
                          onPressed: () {
                            setState(() {
                              projects.add("Project ${projects.length + 1}");
                            });
                            Navigator.of(context).pop();
                          },
                        ),
                      ),
                      const SizedBox(height: 12),
                      ...projects.map(
                        (name) => Card(
                          child: ListTile(
                            title: Text(name),
                            trailing: Row(
                              mainAxisSize: MainAxisSize.min,
                              children: [
                                IconButton(
                                  icon: const Icon(Icons.edit),
                                  tooltip: "Edit",
                                  onPressed: () {
                                    _showEditCopyModal(
                                      context,
                                      title: "Rename",
                                      initialValue: name,
                                      onOk: (newName) {
                                        if (newName.isEmpty) return;
                                        // Kiểm tra tên mới đã tồn tại và khác tên cũ
                                        if (projects.contains(newName) &&
                                            newName != name) {
                                          ScaffoldMessenger.of(
                                            context,
                                          ).showSnackBar(
                                            const SnackBar(
                                              content: Text(
                                                "Project name already exists!",
                                              ),
                                              duration: Duration(seconds: 2),
                                            ),
                                          );
                                        } else {
                                          setState(() {
                                            final idx = projects.indexOf(name);
                                            if (idx != -1 && newName.isNotEmpty)
                                              projects[idx] = newName;
                                          });
                                        }
                                      },
                                      okColor: Colors.blueAccent,
                                      cancelColor: Colors.grey,
                                    );
                                  },
                                ),
                                IconButton(
                                  icon: const Icon(Icons.copy),
                                  tooltip: "Copy",
                                  onPressed: () {
                                    _showEditCopyModal(
                                      context,
                                      title: "Copy as",
                                      initialValue: "$name Copy",
                                      onOk: (newName) {
                                        if (newName.isEmpty) return;
                                        if (projects.contains(newName)) {
                                          // Hiện SnackBar báo lỗi
                                          ScaffoldMessenger.of(
                                            context,
                                          ).showSnackBar(
                                            const SnackBar(
                                              content: Text(
                                                "Project name already exists!",
                                              ),
                                              duration: Duration(seconds: 5),
                                            ),
                                          );
                                        } else {
                                          setState(() {
                                            projects.add(newName);
                                          });
                                        }
                                      },
                                      okColor: Colors.blue,
                                      cancelColor: Colors.grey,
                                    );
                                  },
                                ),
                              ],
                            ),
                            onTap: () {
                              // click project
                            },
                          ),
                        ),
                      ),
                      const SizedBox(height: 5),
                      Align(
                        alignment: Alignment.centerRight,
                        child: TextButton.icon(
                          icon: const Icon(Icons.close),
                          label: const Text("Close"),
                          onPressed: () => Navigator.of(context).pop(),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ),
        );
      },
    );
  }

  // bluetoothbluetooth
  // Future<void> _showBluetoothModal(BuildContext context) async {
  //   List<BluetoothDevice> devices =
  //       await FlutterBluetoothSerial.instance.getBondedDevices();
  //   BluetoothConnection? connection;
  //   BluetoothDevice? connectedDevice;
  //   showDialog(
  //     context: context,
  //     builder: (context) {
  //       return StatefulBuilder(
  //         builder:
  //             (context, setState) => Dialog(
  //               child: Padding(
  //                 padding: const EdgeInsets.all(16),
  //                 child: Column(
  //                   mainAxisSize: MainAxisSize.min,
  //                   children: [
  //                     const Text(
  //                       "Bluetooth",
  //                       style: TextStyle(
  //                         fontWeight: FontWeight.bold,
  //                         fontSize: 20,
  //                       ),
  //                     ),
  //                     const SizedBox(height: 12),
  //                     ElevatedButton.icon(
  //                       icon: const Icon(Icons.refresh),
  //                       label: const Text("Quét lại"),
  //                       onPressed: () async {
  //                         var newDevices =
  //                             await FlutterBluetoothSerial.instance
  //                                 .getBondedDevices();
  //                         setState(() {
  //                           devices = newDevices;
  //                         });
  //                       },
  //                     ),
  //                     const SizedBox(height: 12),
  //                     ...devices.map(
  //                       (device) => ListTile(
  //                         title: Text(device.name ?? device.address),
  //                         subtitle: Text(device.address),
  //                         trailing:
  //                             connectedDevice?.address == device.address
  //                                 ? const Icon(
  //                                   Icons.bluetooth_connected,
  //                                   color: Colors.blue,
  //                                 )
  //                                 : ElevatedButton(
  //                                   child: const Text("Kết nối"),
  //                                   onPressed: () async {
  //                                     try {
  //                                       connection =
  //                                           await BluetoothConnection.toAddress(
  //                                             device.address,
  //                                           );
  //                                       setState(() {
  //                                         connectedDevice = device;
  //                                       });
  //                                       // Hiện thông báo kết nối thành công
  //                                       ScaffoldMessenger.of(
  //                                         context,
  //                                       ).showSnackBar(
  //                                         SnackBar(
  //                                           content: Text(
  //                                             'Đã kết nối tới ${device.name ?? device.address}',
  //                                           ),
  //                                         ),
  //                                       );
  //                                     } catch (e) {
  //                                       ScaffoldMessenger.of(
  //                                         context,
  //                                       ).showSnackBar(
  //                                         SnackBar(
  //                                           content: Text(
  //                                             'Kết nối thất bại: $e',
  //                                           ),
  //                                         ),
  //                                       );
  //                                     }
  //                                   },
  //                                 ),
  //                       ),
  //                     ),
  //                     const SizedBox(height: 12),
  //                     if (connectedDevice != null)
  //                       ElevatedButton.icon(
  //                         icon: const Icon(Icons.send),
  //                         label: const Text("Gửi code"),
  //                         onPressed: () {
  //                           // Gửi dữ liệu qua Bluetooth
  //                           connection?.output.add(
  //                             Utf8Encoder().convert("Hello Kulbot\r\n"),
  //                           );
  //                         },
  //                       ),
  //                     Align(
  //                       alignment: Alignment.centerRight,
  //                       child: TextButton.icon(
  //                         icon: const Icon(Icons.close),
  //                         label: const Text("Đóng"),
  //                         onPressed: () => Navigator.of(context).pop(),
  //                       ),
  //                     ),
  //                   ],
  //                 ),
  //               ),
  //             ),
  //       );
  //     },
  //   );
  // }

  // edit and copy
  void _showEditCopyModal(
    BuildContext context, {
    required String title,
    required String initialValue,
    required void Function(String) onOk,
    Color? okColor,
    Color? cancelColor,
  }) {
    final controller = TextEditingController(text: initialValue);
    showDialog(
      context: context,
      builder: (context) {
        final size = MediaQuery.of(context).size;
        return Dialog(
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(12),
          ),
          child: SingleChildScrollView(
            // Giúp modal cuộn khi bàn phím xuất hiện
            child: Padding(
              padding: const EdgeInsets.all(20),
              child: ConstrainedBox(
                constraints: BoxConstraints(
                  maxWidth: size.width * 0.28,
                  // Không đặt maxHeight, để modal tự co giãn
                ),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Text(
                      title,
                      style: const TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 20,
                      ),
                    ),
                    const SizedBox(height: 16),
                    TextField(
                      controller: controller,
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        labelText: "Project name",
                      ),
                    ),
                    const SizedBox(height: 10),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: [
                        ElevatedButton(
                          style: ElevatedButton.styleFrom(
                            shape: const StadiumBorder(),
                            backgroundColor: cancelColor,
                          ),
                          onPressed: () {
                            Navigator.of(context).pop();
                          },
                          child: const Text("Cancel"),
                        ),
                        ElevatedButton(
                          style: ElevatedButton.styleFrom(
                            shape: const StadiumBorder(),
                            backgroundColor: okColor,
                          ),
                          onPressed: () {
                            onOk(controller.text.trim());
                            Navigator.of(context).pop();
                          },
                          child: const Text("OK"),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ),
          ),
        );
      },
    );
  }

  final BlocklyOptions workspaceConfiguration = BlocklyOptions.fromJson(const {
    'grid': {'spacing': 0, 'length': 0, 'colour': '#fafafa', 'snap': true},
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
        toolbarHeight: 45,
        title: const Icon(Icons.house, size: 30, color: Colors.white),
        backgroundColor: Color(0xFF6DBCFF),
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
          SizedBox(width: MediaQuery.of(context).size.width * 0.04),
          IconButton(
            icon: const Icon(Icons.save),
            onPressed: () {
              // save
            },
          ),
          SizedBox(width: MediaQuery.of(context).size.width * 0.02),
          IconButton(
            icon: const Icon(Icons.bluetooth),
            onPressed: () {
              // _showBluetoothModal(context);
              // bluetooth
            },
          ),
          SizedBox(width: MediaQuery.of(context).size.width * 0.02),
          IconButton(
            icon: const Icon(Icons.list_rounded),
            onPressed: () {
              _showProjectModal(context);
              // menu
            },
          ),
          SizedBox(width: MediaQuery.of(context).size.width * 0.02),
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
