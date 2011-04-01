App.Collections.ViewOverrides = Backbone.Collection.extend({
  model: ViewOverride,
  url: '/deface/themes/' + App.theme_id + '/view_overrides'
});
