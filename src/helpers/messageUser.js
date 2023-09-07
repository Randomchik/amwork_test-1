import { message } from "antd"

export function messageUser(text, type='error'){
    message.open({
        type: type,
        content: text,
      })
}
