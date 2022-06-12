<template>
  <label class="cm-checkbox" :class="labelClasses">
    <input
      type="checkbox"
      :name="name"
      :disabled="isDisabled"
      @click="handleClick"
      :value="value"
      :readonly="readonly"
      :checked="isChecked"
      :indeterminate="isIndeterminate"
    />
    <span class="cm-checkbox__input">
      <Icon :icon="inputIcon"></Icon>
    </span>
    <span class="cm-checkbox__content"
      ><slot>{{ label }}</slot></span
    >
  </label>
</template>

<script>
import { Icon } from '@iconify/vue2';

const CLASS_PREFIX = 'cm-checkbox';

export default {
  name: 'CMCheckbox',
  components: {
    Icon,
  },
  inject: {
    checkboxGroup: { default: undefined },
  },
  model: {
    prop: 'checked',
  },
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    checkAll: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    indeterminate: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
    },
    name: {
      type: String,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isChecked() {
      if (this.checkboxGroup) {
        if (this.checkAll) {
          return this.checkboxGroup.isCheckAll;
        }

        return this.checkboxGroup.value.includes(this.value);
      }

      return this.checked;
    },
    isIndeterminate() {
      if (this.checkboxGroup && this.checkAll) {
        return this.checkboxGroup.isIndeterminate;
      }

      return this.indeterminate;
    },
    isDisabled() {
      if (this.checkboxGroup) {
        return this.disabled || this.checkboxGroup.disabled;
      }

      return this.disabled;
    },
    labelClasses() {
      const classes = [];

      if (this.isDisabled) {
        classes.push(`${CLASS_PREFIX}--disabled`);
      }

      if (this.isIndeterminate) {
        classes.push(`${CLASS_PREFIX}--indeterminate`);
      } else if (this.isChecked) {
        classes.push(`${CLASS_PREFIX}--checked`);
      }

      return classes;
    },
    inputIcon() {
      if (this.isIndeterminate) {
        return 'akar-icons:minus';
      }
      if (this.isChecked) {
        return 'akar-icons:check';
      }

      return '';
    },
  },
  methods: {
    handleClick() {
      this.$emit('input', !this.checked);
    },
  },
};
</script>

<style lang="scss" scoped>
.cm-checkbox {
  cursor: pointer;

  &--indeterminate,
  &--checked {
    .cm-checkbox__input {
      background: blue;
    }
  }

  &--disabled {
    cursor: not-allowed;

    .cm-checkbox__input {
      background: #eee;
    }
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }

  &__input {
    display: inline-block;
    width: 16px;
    height: 16px;
    background-color: #fff;
    border: 1px solid #eee;
    color: white;
    box-sizing: border-box;
    vertical-align: text-bottom;
    margin-right: 4px;
  }
}
</style>
