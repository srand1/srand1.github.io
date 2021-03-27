(() => {
	const btn = document.createElement('button');
	document.body.append(btn)
	btn.textContent = 'Do';
	const textarea = document.createElement('textarea');
	document.body.append(textarea);
	const output = document.createElement('div');
	document.body.append(output);

	const blocklist = new Set(`
小号 微信 转账 汇款
兼职 筹钱 退款 支付宝

兼职 回国 机票 借钱 小号
账户 银行 密码 销号 翻墙
淘宝 微信 投资 理财 支付
新号 机场 买票 退款 支付宝
订单 定金 资金 充值 交易
黄牛 转钱 买二送一

小号 新号 借钱 借款 打钱 收款 兼职 刷单 理财 投资
定金 机票 订票 退票 买票 出票 回国 托运 充值 转账
支付 支付宝 入会费

淘宝 付款 尾款 转钱 邮费 交易 期货 高仿 筹钱 账号
密码 销号 微信 翻墙 黄牛 机场 买二送一

jz 集资 钱 money 人民币 rmb 卡 汇款 银行
QQ 资金 国际长途 转账
	`.trim().split(/\s+/));
	btn.addEventListener('click', evt => {
		let ans = '';
		blocklist.forEach(word => {
			if (textarea.value.includes(word)) {
				ans += word + ' ';
			}
		});
		output.textContent = ans;
	});
})();
