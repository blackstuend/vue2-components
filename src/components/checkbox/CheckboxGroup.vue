<script>
import Checkbox from './Checkbox.vue';

export default {
  name: 'CMCheckBoxGroup',
  components: {
    Checkbox,
  },
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      optionList: 0,
    };
  },
  provide() {
    return {
      checkboxGroup: this,
    };
  },
  methods: {
    handleChange(isChecked, value) {
      const findIndex = this.value.findIndex((item) => {
        if (item === value) {
          return true;
        }
        return false;
      });

      let resultValue = this.value.slice(0);

      if (isChecked) {
        resultValue.push(value);
      } else {
        if (value === 'all') {
          resultValue = [];
        }

        resultValue.splice(findIndex, 1);
      }

      this.$emit('input', resultValue);
    },
  },
  computed: {
    isIndeterminate() {
      if (!this.isCheckAll && this.value.length > 0 && this.optionLen !== this.value.length) {
        return true;
      }

      return false;
    },
    isCheckAll() {
      if (this.value.length === this.optionLen) {
        return true;
      }

      return false;
    },
    optionLen() {
      return this.optionList.length;
    },
  },
  render() {
    const that = this;

    function optionRender() {
      that.optionLen = that.options.length - 1;

      return that.options.map((item) => (
        <Checkbox
          checkAll={item.checkAll}
          disabled={item.disabled}
          indeterminate={item.indeterminate}
          label={item.label}
          value={item.value}
          name={item.name}
          readonly={item.readonly}
        ></Checkbox>
      ));
    }

    function slotRender() {
      if (that.$scopedSlots.default) {
        const slot = that.$scopedSlots.default(null);
        that.optionLen = slot.length - 1;

        return slot;
      }

      return '';
    }

    return <div>{this.options && this.options.length > 0 ? optionRender() : slotRender()}</div>;
  },
};
</script>
