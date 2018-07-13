import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, boolean, select} from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import {ThemeSelector} from "../../../addons/ThemeSwitcher";

import {ContactUs} from '../../../components';
import Readme from '../../../components/ContactUs/README.md';

const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);

stories.add('ContactUs', withReadme([Readme], () => {
	return (
		<ThemeSelector>
			<ContactUs
				showText={boolean("Show text", false)}
				showPlaceholder={boolean("Show placeholder", true)}
				name={text("Name", "John")}
				mail={text("Email", "john.email@domain.com")}
				phone={text("Phone", "2 578 1545")}
				message={text("Message", "This is my message")}
				nameText={text("Name text", "Your Name")}
				mailText={text("Email text", "Your email")}
				messageText={text("Message text", "Your Message")}
				phoneText={text("Phone text", "Your Phone")}
				submitButtonText={text("Submit text", "Submit")}
				submitButtonAlign={select("Submit align", {
					"center": "center",
					"left": "left",
					"right": "right",
				}, "center")}
				onSubmit={({name, mail, phone, message}) => {
					alert(`Send data with {"name":"${name}", "mail": "${mail}", "phone":"${phone}", "message":"${message}"}`)
				}}
			/>
		</ThemeSelector>
	);
}));