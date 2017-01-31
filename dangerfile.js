import { danger, fail, markdown } from 'danger'

const TITLE_CHARACTER_MINIMUM = 5

let text = ''
const hasGoodTitle = danger.github.pr.title.toLowerCase().indexOf('update readme') === -1 && danger.github.pr.title.length > TITLE_CHARACTER_MINIMUM

if (!hasGoodTitle) {
	text += 'didn\'t follow the [contribution guidelines](https://github.com/mxstbr/awesome-austria/blob/master/contributing.md). Please give your PR a proper title explaining what you changed!'
} else {
	const readContributionGuidelines = danger.github.pr.body.indexOf('<!-- Leave this text in and start your description of the change below -->') > -1
	if (!readContributionGuidelines) {
		text += 'didn\'t follow the [contribution guidelines](https://github.com/mxstbr/awesome-austria/blob/master/contributing.md).'
	}
}

if (text.length > 0) {
	fail()
	markdown(`\nThanks for the pull request, @${danger.github.pr.user.login}! I took a look to make sure it's ready for merging, and noticed you ${text}\n\nCan you please update the PR to address this?`)
}
