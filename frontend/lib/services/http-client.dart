import 'package:dio/dio.dart';
import 'package:flutter/foundation.dart';
import '../constants.dart' as constants;

class HttpServices {
  static Future<Object> fetchUrl(String urlId) async {
    final String url = '${constants.API_ENDPOINT}/url-handler/$urlId';
    // print(url);
    // var response = await Dio().get(url);
    // print(response.body);
    // return 'asdas';
    try {
      var response = await Dio().get(url);
      print(response);
      return response;
    } catch (e) {
      print(e);
      return e;
    }
  }
}
