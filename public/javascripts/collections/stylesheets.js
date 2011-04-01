App.Collections.Stylesheets = Backbone.Collection.extend({
  model: Stylesheet,
  url: '/deface/themes/' + App.theme_id + '/stylesheets'
});
