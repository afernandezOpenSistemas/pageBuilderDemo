import { Story } from "@arc-core-components/tools_mock-ans";

export default {
  fetch() {
    return Promise.resolve(new Story());
  }
};
