import Ember from "ember";

const computed = Ember.computed;

export default function(type) {
  return computed(function nearestParent() {
    var typeClass = this.container.lookupFactory('component:' + type) ||
                    this.container.lookupFactory('view:' + type);
    return this.nearestOfType(typeClass);
  });
}
