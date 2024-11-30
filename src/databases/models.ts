import { schemaAndModel } from "../utils/modelAndSchemaResume";

const User = schemaAndModel({
    name: "user",
    schema: {}
});

const Notices = schemaAndModel({
    name: "notices",
    schema: {}
});

const Link = schemaAndModel({
    name: "link",
    schema: {}
});

const MoreInfoLink = schemaAndModel({
    name: "more-info-link",
    schema: {}
});


export { User, Notices, Link, MoreInfoLink }