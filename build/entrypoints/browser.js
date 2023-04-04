import { Base64 } from 'js-base64';
import { MIMEMessage } from '../MIMEMessage';
const envctx = {
    toBase64: function toBase64(data) {
        return Base64.encode(data);
    },
    toBase64WebSafe: function toBase64WebSafe(data) {
        return Base64.encodeURI(data);
    },
    eol: '\r\n',
    validateContentType: (v) => {
        return v.length > 0 ? v : false;
    }
};
export function createMimeMessage() {
    return new MIMEMessage(envctx);
}
export { MIMEMessage } from '../MIMEMessage';
export { Mailbox } from '../Mailbox';
export { MIMETextError } from '../MIMETextError';
export { MIMEMessageHeader } from '../MIMEMessageHeader';
export { MIMEMessageContent } from '../MIMEMessageContent';
