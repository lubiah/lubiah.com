import { visit } from 'unist-util-visit';
import icons from './icons.js';

const ALLOWED_TYPES = ['warning', 'info'];

const remarkNotes = () => {
	return (tree, file) => {
		visit(tree, (node) => {
			if (node.type === 'containerDirective' && node.name === 'note') {
				const { type } = node.attributes;
				if (!type) file.fail('Note must have an type', node);
				if (!ALLOWED_TYPES.includes(type)) file.fail(`Unknow note type '${type}'`, node);
				const data = node.data ?? (node.data = {});
				data.hName = 'aside';
				data.hProperties = {
					class: `note note--${type}`
				};
				let iconContainer = {
					type: 'element',
					data: { hName: 'span', hProperties: { class: 'icon' } },
					children: [icons[type]]
				};
				let contentContainer = {
					type: 'element',
					data: {
						hProperties: {
							class: 'content'
						}
					},
					children: [...node.children]
				};

				node.children = [iconContainer, contentContainer];
			}
		});
	};
};

export default remarkNotes;
