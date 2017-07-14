<?php
$content = '';
if($_POST['contentNo'] == 1){
	$content = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget sollicitudin tellus. Cras at posuere augue. Ut vitae urna gravida, molestie diam in, sollicitudin augue. Nam blandit bibendum massa, vel tincidunt dui dignissim vitae. Nulla facilisi. Nam a pharetra nulla, nec tincidunt leo. 
	Integer sit amet odio eget est pretium porttitor. Ut sit amet tu Donec non dignissim eros. Nam ut libero dictum, cursus nibh non, lobortis risus. Nulla quis gravida nulla. Nunc nisi justo, dignissim quis imperdiet vel, pretium sed diam.</p>';
}
if($_POST['contentNo'] == 2){
	$content = '<p>Test Test Test.......Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra nisl vel interdum sagittis. Suspendisse sed consectetur erat, vitae porttitor massa.</p>';
}
if($_POST['contentNo'] == 3){
	$content = '<p>RS Test RS Test RS Test.......Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra nisl vel interdum sagittis. Suspendisse sed consectetur erat, vitae porttitor massa.</p>';
    $content .= '<p>Mauris tincidunt orci nec sem convallis efficitur. In faucibus rutrum vehicula. Nullam bibendum urna a massa convallis, et pellentesque risus efficitur. Sed rutrum est ut lacinia dapibus. Duis in lectus vitae nisi venenatis tincidunt et id enim. Cras tempus venenatis neque non pharetra. Cras fermentum scelerisque nibh eu suscipit.</p>';
}
if($_POST['contentNo'] == 4){
	$content = '<p>new Test new Test new Test.......Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra nisl vel interdum sagittis. Suspendisse sed consectetur erat, vitae porttitor massa.</p>';
    $content .= '<p>Mauris tincidunt orci nec sem convallis efficitur. In faucibus rutrum vehicula. Nullam bibendum urna a massa convallis, et pellentesque risus efficitur. Sed rutrum est ut lacinia dapibus. Duis in lectus vitae nisi venenatis tincidunt et id enim. Cras tempus venenatis neque non pharetra. Cras fermentum scelerisque nibh eu suscipit.</p>';
}
if($_POST['contentNo'] == 5){
	$content = '<p>aaa Test bbbbb Test cccccccc Test.......Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra nisl vel interdum sagittis. Suspendisse sed consectetur erat, vitae porttitor massa.</p>';
    $content .= '<p>Mauris tincidunt orci nec sem convallis efficitur. In faucibus rutrum vehicula. Nullam bibendum urna a massa convallis, et pellentesque risus efficitur. Sed rutrum est ut lacinia dapibus. Duis in lectus vitae nisi venenatis tincidunt et id enim. Cras tempus venenatis neque non pharetra. Cras fermentum scelerisque nibh eu suscipit.</p>';
}
if($_POST['contentNo'] == 6){
	$content = '<p>dddd Test eeee Test ffff Test.......Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra nisl vel interdum sagittis. Suspendisse sed consectetur erat, vitae porttitor massa.</p>';
    $content .= '<p>Mauris tincidunt orci nec sem convallis efficitur. In faucibus rutrum vehicula. Nullam bibendum urna a massa convallis, et pellentesque risus efficitur. Sed rutrum est ut lacinia dapibus. Duis in lectus vitae nisi venenatis tincidunt et id enim. Cras tempus venenatis neque non pharetra. Cras fermentum scelerisque nibh eu suscipit.</p>';
}


echo $content;
