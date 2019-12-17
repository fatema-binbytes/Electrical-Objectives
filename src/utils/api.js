import HTTPStatus from 'http-status';

const CONTENT_TYPE_JSON = 'application/json';
const CONTENT_TYPE_TEXT = 'text/plain';
const CONTENT_TYPE = 'Content-Type';

export async function POST(
  url,
  body = null,
  token = null,
  status = null,
  callback,
) {
  let headers;

  if (token === null) {
    headers = {
      'Content-Type': CONTENT_TYPE_JSON,
    };
  } else {
    headers = {
      'Content-Type': CONTENT_TYPE_JSON,
      Authorization: token,
    };
  }

  if (body != null) body = JSON.stringify({...body});

  const res = await fetch(url, {
    method: 'POST',
    headers,
    body,
  });
  if (res.headers.get(CONTENT_TYPE).startsWith(CONTENT_TYPE_JSON)) {
    const json = await res.json();
    if (res.status === (status === null ? HTTPStatus.OK : status)) {
      callback(json);
    } else {
      callback(false, json.error);
    }
  } else if (res.headers.get(CONTENT_TYPE).startsWith(CONTENT_TYPE_TEXT)) {
    if (res.status === (status === null ? HTTPStatus.OK : status)) {
      callback(res.body);
    } else {
      callback(false, res.body);
    }
  }
}

export async function GET(url, token = null, status = null, callback) {
  let headers;

  if (token === null) {
    headers = {};
  } else {
    headers = {
      Authorization: token,
    };
  }

  const res = await fetch(url, {
    method: 'GET',
    headers,
  });

  if (res.headers.get(CONTENT_TYPE).startsWith(CONTENT_TYPE_JSON)) {
    const json = await res.json();
    if (res.status === (status === null ? HTTPStatus.OK : status)) {
      callback(json);
    } else {
      callback(false, json.error);
    }
  } else {
    if (res.status === (status === null ? HTTPStatus.OK : status)) {
      callback(res.body);
    } else {
      callback(false, res.body);
    }
  }
}
