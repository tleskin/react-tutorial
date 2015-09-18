var Hello = React.createClass({
  render: function() {
    return React.createElement("div", null, "Hello World");
  }
});

var LikeArticle = React.createClass({
  render: function() {
    if (this.state.isLiked) {
      return React.createElement("div", {onClick: this.handleClick}, "Un-Like Me!");
    } else {
      return React.createElement("div", {onClick: this.handleClick}, "Like Me!");
    }
  },
  handleClick: function() {
    this.setState({isLiked: !this.state.isLiked});
  },
  getInitialState: function() {
    return {isLiked: false};
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
