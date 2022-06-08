import 'package:flutter/material.dart';
import 'package:flutter_web_plugins/flutter_web_plugins.dart';
import 'package:url_shortener_frontend/pages/url_shorter.dart';
import 'package:qlevar_router/qlevar_router.dart';
import 'package:url_shortener_frontend/routes/app_router.dart';

import 'components/urlshortenerbar.dart';

void main() {
  setUrlStrategy(PathUrlStrategy());
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    final appRoutes = AppRoutes();
    appRoutes.setup();

    return MaterialApp.router(
      title: 'Url Shortener Demo',
      theme: ThemeData(
        scaffoldBackgroundColor: Colors.white,
        primarySwatch: Colors.grey,
      ),
      routeInformationParser: const QRouteInformationParser(),
      routerDelegate: QRouterDelegate(
        appRoutes.routes,
        observers: [
          // Add your observers to the main navigator
          // to watch for all routes in all navigators use [QR.observer]
        ],
      ),
    );
  }
}
