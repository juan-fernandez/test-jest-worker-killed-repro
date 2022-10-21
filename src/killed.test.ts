import { wait } from "./utils/wait";

test("jest-worker externally killed", async () => {
    await wait(2_000);
}, 3_000);

setTimeout(() => {
    // Self-kill to make repro easier.
    process.kill(process.pid);
}, 1_000);
