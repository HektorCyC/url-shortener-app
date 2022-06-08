import 'package:flutter/material.dart';
import 'package:url_shortener_frontend/services/http-client.dart';

class UrlShortenerBar extends StatefulWidget {
  const UrlShortenerBar({Key? key}) : super(key: key);

  @override
  State<UrlShortenerBar> createState() => _UrlShortenerBarState();
}

class _UrlShortenerBarState extends State<UrlShortenerBar> {
  final TextEditingController textInputController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        SizedBox(
          width: 500,
          child: TextField(
            controller: textInputController,
            decoration: const InputDecoration(
              floatingLabelBehavior: FloatingLabelBehavior.never,
              border: OutlineInputBorder(),
              labelText: 'Type your looooong URL here...',
            ),
          ),
        ),
        IconButton(
          icon: const Icon(Icons.shortcut_sharp),
          tooltip: 'Short this URL!',
          onPressed: () {
            var longUrl = textInputController.text;
            if (longUrl.isNotEmpty) {
              textInputController.clear();
              HttpServices.createShortUrl(longUrl)
                  // ignore: avoid_print
                  .then((value) {
                print(value);
              });
            }
          },
        ),
      ],
    );
  }
}
