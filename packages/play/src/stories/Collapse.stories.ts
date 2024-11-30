import type { Meta, StoryObj } from "@storybook/vue3";
import { MyCollapse, MyCollapseItem } from "moyu-ui";
// import 'moyu-ui/dist/theme/Collapse.css'

type Story = StoryObj<typeof MyCollapse>;

const meta: Meta<typeof MyCollapse> = {
  title: "Example/Collapse",
  component: MyCollapse,
  subcomponents: { MyCollapseItem },
  tags: ["autodocs"],
};

export const Default: Story = {
  render: (args) => ({
    components: {
      MyCollapse,
      MyCollapseItem,
    },
    setup() {
      return {
        args,
      };
    },
    template: `
    <my-collapse v-bind="args">
      <my-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </my-collapse-item>
      <my-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </my-collapse-item>
      <my-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </my-collapse-item>
    </my-collapse>
    `,
  }),
  args: {
    accordion: true,
    modelValue: ["a"],
  },
};

export default meta;