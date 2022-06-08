import 'package:qlevar_router/qlevar_router.dart';
import 'package:url_shortener_frontend/main.dart';
import 'package:url_shortener_frontend/pages/home.dart';
import 'package:url_shortener_frontend/pages/url_shorter.dart';

class AppRoutes {
  static const String root = 'root';
  static const String login = 'login';

  void setup() {
    // enable debug logging for all routes
    QR.settings.enableDebugLog = true;

    // you can set your own logger
    // QR.settings.logger = (String message) {
    //   print(message);
    // };

    // Set up the not found route in your app.
    // this route (path and view) will be used when the user navigates to a
    // route that does not exist.
    QR.settings.notFoundPage = QRoute(
      path: 'path',
      builder: () => const MyHomePage(),
    );

    // add observers to the app
    // this observer will be called when the user navigates to new route
    QR.observer.onNavigate.add((path, route) async {
      print('Observer: Navigating to $path');
    });

    // this observer will be called when the popped out from a route
    QR.observer.onPop.add((path, route) async {
      print('Observer: popping out from $path');
    });

    // create initial route that will be used when the app is started
    // or when route is waiting for response
    //QR.settings.iniPage = InitPage();

    // Change the page transition for all routes in your app.
    QR.settings.pagesType = const QFadePage();
  }

  final routes = <QRoute>[
    QRoute(
      // this will define how to find this route with [QR.to]
      path: '/',
      // this will define how to find this route with [QR.toName]
      name: root,
      // The page to show when this route is called
      builder: () => const MyHomePage(),
    ),
    QRoute(
        path: '/goto/:urlId',
        pageType: const QFadePage(
          transitionDurationMilliseconds: 1000,
          withType: QSlidePage(
              transitionDurationMilliseconds: 5000), // set the type to mix with
        ),
        builder: () => const UrlShorterPage()),
  ];
}
