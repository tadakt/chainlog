import { deserialize, serialize } from 'borsh';

type Post = {
    title: string;
    contents: string;
}

const schema = {
    struct: {
        title: "string",
        contents: "string",
    },
};

export const deserializePost = (buffer: Uint8Array) => {
    return deserialize(schema, buffer);
}

export const serializePost = (instance: Post) => {
    
    return serialize(schema, instance);
}