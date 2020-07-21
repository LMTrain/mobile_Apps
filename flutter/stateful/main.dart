import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    home: MyButton(),
  ));
}

class MyButton extends StatefulWidget {
  @override
  MyButtonState createState() {
    return MyButtonState();
  }
}

class MyButtonState extends State<MyButton> {
  int counter = 0;
  List<String> spanishNumbers = [
    "uno (One)",
    "dos (Two)",
    "tres (Three)",
    "cuatro (Four)",
    "cinco (Five)",
    "seis (Six)",
    "seite (Seven)",
    "ocho (Eight)",
    "nueve (Nine)",
    "dietz (Ten)"
  ];
  String defaultText = "Spanish numbers";

  void displaySNumbers() {
    setState(() {
      defaultText = spanishNumbers[counter];
      if (counter < 9) {
        counter = counter + 1;
      } else {
        counter = 0;
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('My stateful App'),
        backgroundColor: Colors.pink[200],
      ),
      body: Container(
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Text(defaultText, style: TextStyle(fontSize: 30.0)),
              Padding(
                padding: EdgeInsets.all(10.0),
              ),
              RaisedButton(
                child: Text(
                  'Call numbers',
                  style: TextStyle(fontWeight: FontWeight.bold, color: Colors.green[700]),
                ),
                onPressed: displaySNumbers,
                color: Colors.pink[200],
              )
            ],
          ),
        ),
      ),
    );
  }
}
