(function () {
	function init() {
		document.querySelectorAll('.insights-tabs').forEach(function (group) {
			var scope = group.parentElement;

			group.addEventListener('click', function (e) {
				var btn = e.target.closest('button');
				if (!btn) return;

				var target = btn.getAttribute('data-tab');

				group.querySelectorAll('button').forEach(function (b) {
					b.classList.toggle('active', b === btn);
				});

				scope.querySelectorAll('.tab-panel').forEach(function (panel) {
					panel.classList.toggle('active', panel.getAttribute('data-tab-panel') === target);
				});
			});
		});
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
}());
