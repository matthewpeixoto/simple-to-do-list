$form = $('form');
$item = $('.item');
$list = $('.list');

$form.on('submit', function (e) {
  var $newItem = $('<li>').html($item.val(''));

  e.preventDefault();
  $list.append($newItem);
});

$list.on('click', 'li', function (e) {
  $(this).toggleClass('js-complete');
});
