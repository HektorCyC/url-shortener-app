import 'package:dio/dio.dart';
import 'package:flutter/foundation.dart';
import 'package:url_shortener_frontend/services/models/short_url_model.dart';
import '../constants.dart' as constants;

class HttpServices {
  static Future<Object> fetchUrl(String urlId) async {
    final String url = '${constants.API_ENDPOINT}/url-handler/$urlId';
    try {
      var response = await Dio().get(url);
      print(response.data);
      return response;
    } catch (error) {
      return error;
    }
  }

  static Future<Object> createShortUrl(String longUrl) async {
    const String url = '${constants.API_ENDPOINT}/url-handler';
    try {
      var response = await Dio().post(url, data: {"longUrl": longUrl});
      return response.data;
    } catch (error) {
      return error;
    }
  }
}
