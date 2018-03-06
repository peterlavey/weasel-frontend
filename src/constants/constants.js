const LIST_STATUS = [{'name':'OK', 'code' : 200},
    {'name':'CREATED', 'code' : 201},
    {'name':'ACCEPTED', 'code' : 202},
    {'name':'NON_AUTHORITATIVE_INFORMATION', 'code' : 203},
    {'name':'NO_CONTENT', 'code' : 204},
    {'name':'BAD_REQUEST', 'code' : 400},
    {'name':'UNAUTHORIZED', 'code' : 401},
    {'name':'FORBIDDEN', 'code' : 403},
    {'name':'NOT_FOUND', 'code' : 404},
    {'name':'REQUEST_TIMEOUT', 'code' : 408},
    {'name':'INTERNAL_SERVER_ERROR', 'code' : 500},
    {'name':'SERVICE_UNAVAILABLE', 'code' : 503},
    {'name':'GATEWAY_TIMEOUT', 'code' : 504}
];
export const FOLDER_TYPE = {
    FOLDER: 'folder',
    REST: 'rest',
    EMPTY: 'empty'
};