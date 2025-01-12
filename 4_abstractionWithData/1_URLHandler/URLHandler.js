import { URL } from 'node:url';
// Реализуйте абстракцию для работы с урлами. Она должна извлекать и менять части
// адреса. Интерфейс:
//
//     make(url) - Конструктор. Создает урл.
//     setProtocol(data, protocol) - Сеттер. Меняет схему.
//     getProtocol(data) - Селектор (геттер). Извлекает схему.
//     setHost(data, host) - Сеттер. Меняет хост.
//     getHost(data) - Геттер. Извлекает хост.
//     setPath(data, path) - Сеттер. Меняет строку запроса.
//     getPath(data) - Геттер. Извлекает строку запроса.
//     setQueryParam(data, key, value) - Сеттер. Устанавливает значение для параметра запроса.
//     getQueryParam(data, paramName, defaultValue = null) - Геттер. Извлекает значение
//     для параметра запроса. Третьим параметром функция принимает значение по умолчанию,
//     которое возвращается тогда, когда в запросе не было такого параметра
//     toString(data) - Геттер. Преобразует урл в строковой вид.
//
// const url = make('https://hexlet.io/community?q=low');
//
// setProtocol(url, 'http:');
// toString(url); // 'http://hexlet.io/community?q=low'
//
// setPath(url, '/404');
// toString(url); // 'http://hexlet.io/404?q=low'
//
// setQueryParam(url, 'page', 5);
// toString(url); // 'http://hexlet.io/404?q=low&page=5'
//
// setQueryParam(url, 'q', 'high');
// toString(url); // 'http://hexlet.io/404?q=high&page=5'

/* eslint-disable no-param-reassign */

export const make = url => new URL(url);

export const setProtocol = (data, protocol) => {
  data.protocol = protocol;
};
export const getProtocol = data => data.protocol;

export const setHost = (data, host) => {
  data.host = host;
};

export const getHost = data => data.host;

export const setPath = (data, path) => {
  data.pathname = path;
};

export const getPath = data => data.pathname;

export const setQueryParam = (data, key, value) => {
  data.searchParams.set(key, value);
};

export const getQueryParam = (data, paramName, defaultValue = null) =>
  data.searchParams.get(paramName) ?? defaultValue;

export const toString = data => data.toString();
