import { wait } from "./utils/wait";

test("waiting 2s and finish", async () => {
    await wait(2_000);
}, 3_000);
