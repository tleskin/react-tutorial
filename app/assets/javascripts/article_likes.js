var Hello = React.createClass({
  render: function() {
    return React.createElement("div", null, "Hello World");
  }
});

var LikeArticle = React.createClass({
  render: function() {
    return React.createElement("div", null, "Like Me!");
  }
});

//
// $(document).ready(function() {
//   React.render(
//     React.createElement(Hello),
//     document.getElementById('articles')
//   );
// });

$(document).ready(function() {
  $(".like-article").each(function(index, element) {
    React.render(
      React.createElement(LikeArticle),
      element
    );
  });
});
