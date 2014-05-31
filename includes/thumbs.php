		<main class="main-thumbs"><div class="inner">

		<?php for($i=0;$i<14;$i++): ?>
			<a href="./student.php" class="thumb<?php if( ($i==0) or ($i%3==0) ) echo " first" ?>">
				<div class="thumb-image">
					<img src="./static/img/template/test_01.jpg" alt="placeholder">
				</div>
				<div class="thumb-title">
					<div class="thumb-title-inner">
						<h3>Student name</h3>
						<h4>Pathway</h4>
					</div>
				</div>
			</a>
		<?php endfor; ?>

		</div></main>	