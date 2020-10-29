<template>
  <div class="ly-tab">
    <ly-tabbar v-model="selectedId" v-bind="options">
      <ly-tab-item v-for="(item, index) in items" :key="index">
        <p @click="returnSrc(item)" class="v-item">
          <span v-if="options.fixBottom && item.icon" slot="icon">
            <i :class="item.icon"></i>
          </span>
          <span v-if="ltype">
            <img :src="item.url" >
          </span>
          <span class="pic" v-else>
            <img :src="item.videoThumb" >
          </span>
        </p>
      </ly-tab-item>
    </ly-tabbar>
  </div>
</template>

<script>
import LyTabbar from "./tabbar";
import LyTabItem from "./tab-item";

export default {
  name: "LyTab",
  components: {
    LyTabbar,
    LyTabItem
  },
  props: {
    ltype: String,
    value: {
      type: Number,
      default: 0
    },
    items: {
      type: Array,
      default() {
        return [];
      }
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      selectedId: this.value
    };
  },
  computed: {
    labelKey() {
      return this.options.labelKey || "label";
    }
  },
  methods: {
    returnSrc(src) {
      this.$emit("changeSrc", src);
    }
  },
  watch: {
    value(value) {
      this.selectedId = value;
    },
    selectedId(value) {
      this.$emit("input", value);
      this.$emit("change", this.items[value], value);
    }
  }
};
</script>

<style lang="less">
.v-item {
  position: relative;
  margin: 0;
  .pic {
    display: inline-block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
