import { v4 } from "uuid";
import { createHash } from "crypto";

const slat = v4();
const password = "andy";
const str = slat + password;
const result = createHash("md5").update(str).digest("hex");
console.log(slat);
console.log(result);
