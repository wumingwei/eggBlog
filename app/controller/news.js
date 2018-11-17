const Controller = require("egg").Controller;

class NewsController extends Controller {
	async list() {
		const ctx = this.ctx;
		const page = ctx.query.page || 1;
		// console.log("请求的数据：", await ctx.service.news.list(page));
		const newsList = await ctx.service.news.list(page);
		await ctx.render("news/list.tpl", { list: newsList });
	}
}

module.exports = NewsController;
