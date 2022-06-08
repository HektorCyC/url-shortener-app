import 'package:flutter/material.dart';

class UrlShortenerBar extends StatelessWidget {
  const UrlShortenerBar({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        const SizedBox(
          width: 500,
          child: TextField(
            decoration: InputDecoration(
              floatingLabelBehavior: FloatingLabelBehavior.never,
              border: OutlineInputBorder(),
              labelText: 'Type your looooong URL here...',
            ),
          ),
        ),
        IconButton(
          icon: const Icon(Icons.shortcut_sharp),
          tooltip: 'Short this URL!',
          onPressed: () {},
        ),
      ],
    );
  }
}
