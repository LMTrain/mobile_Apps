import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
    Widget build(BuildContext context){
      return MaterialApp(
      debugShowCheckedModeBanner: false,
      // theme: ThemeData.dark(),
      theme: ThemeData(
        primaryColor: Colors.green,
        accentColor: Colors.black,
      ),
      home: Scaffold(
        appBar: AppBar(
          title: Text('Flutter'),
          backgroundColor: Colors.pink[200],
        ),
        body: Center(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Text('I am Text line 1'),
              Text('I am Text line 2'),
              RaisedButton(
                onPressed: () {},
                child: Text('Signup'),
                color: Colors.pink[200],
                splashColor: Colors.blue,
              )
            ],
          ),

        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () {},
          child: Icon(
            Icons.add_a_photo,
            color: Colors.pink[200],
            
          ),
        ),
      )
    );
  }
}
