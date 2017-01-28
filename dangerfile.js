import { danger, fail } from 'danger'

const hasGoodTitle = danger.github.pr.title.toLowerCase().indexOf('update readme') === -1

if (!hasGoodTitle) {
	fail('Please read the contribution guidelines and give your PR a proper title explaining what you added.')
}

const changedList = danger.git.modified_files.includes('README.md')
if (changedList) {
	const readContributionGuidelines = danger.github.pr.body.indexOf('<!-- Leave this text in and start your description of the change below -->') > -1
	if (!readContributionGuidelines) {
		fail('Please read the contribution guidelines.')
	}
}
