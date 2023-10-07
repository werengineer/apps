var _cio = _cio || [];
(function () {
	var a, b, c;
	a = function (f) {
		return function () {
			_cio.push([f].concat(Array.prototype.slice.call(arguments, 0)));
		};
	};
	b = ["load", "identify", "sidentify", "track", "page"];
	for (c = 0; c < b.length; c++) {
		_cio[b[c]] = a(b[c]);
	}
	var t = document.createElement("script"),
		s = document.getElementsByTagName("script")[0];
	t.async = true;
	t.id = "cio-tracker";
	t.setAttribute("data-site-id", "96d2a34aec59387fc929");
	t.setAttribute("data-base-url", "https://customerioforms.com");
	t.setAttribute("data-use-array-params", "true");

	// To disable in-app messages, remove the two lines below
	t.setAttribute("data-in-app-org-id", "undefined");
	t.setAttribute("data-use-in-app", "true");
	// If data-in-app-org-id was not filled above, go to
	// the following link to find it: https://fly.customer.io/env/last/settings/actions/in_app'

	t.src = "https://assets.customer.io/assets/track.js";

	s.parentNode.insertBefore(t, s);
})();

_cio.identify({
	// Required attributes
	id: "user@domain.com", // Use either id or email.

	// Stringly recommended attributes
	created_at: 1339438758, // Timestamp in your system that represents when
	// the user first signed up. You'll want to send it
	// as seconds since the epoch.

	// Example attributes (you can name attributes what you wish)
	first_name: "John", // Add any attributes you'd like to use in the email subject or body.
	last_name: "Smith", // First name and last name are shown on people pages.
	plan_name: "premium" // To use the example segments, set this to 'free' or 'premium'.
});
