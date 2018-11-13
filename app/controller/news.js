const Controller = require("egg").Controller;

class NewsController extends Controller {
	async list() {
		const dataList = {
			list: [
				{ id: 1, title: "this is new 1" },
				{ id: 2, title: "this is new 2" },
				{ id: 3, title: "this is new 3" },
				{ id: 4, title: "this is new 4" },
				{ id: 5, title: "this is new 5" },
				{ id: 6, title: "this is new 6" },
				{ id: 7, title: "this is new 7" },
				{ id: 8, title: "this is new 8" },
				{ id: 9, title: "this is new 9" },
				{ id: 10, title: "this is new 10" },
				{ id: 11, title: "this is new 11" },
				{ id: 12, title: "this is new 12" },
				{ id: 13, title: "this is new 13" },
			],
		};
		await this.ctx.render("news/list.tpl", dataList);
	}
}
module.exports = NewsController;
