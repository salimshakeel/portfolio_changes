import { Tool, Contact, Information } from "./_schemas"

export default {
	tools: [
		new Tool("Tensorflow"),
		new Tool("Scikit Learn"),
		new Tool("Pytorch"),
		new Tool("Pandas"),
		new Tool("Matplotlib"),
		new Tool("Numpy"),
		new Tool("Python"),
		new Tool("HTML"),
		new Tool("CSS"),
		new Tool("Javascript"),
		new Tool("SQL"),
		// new Tool("Tailwind CSS"),
	],
	contacts: [
		new Contact("Github"),
		new Contact("LinkedIn"),
		new Contact("Kaggle"),
		new Contact("HackerRank"),
		new Contact("Fiverr"),
		new Contact("Leetcode"),
	],
	information: new Information(
		"Salim  here !",
		"I am a 21-year-old student pursuing a degree in Computer Science, passionately delving into the realms of Artificial Intelligence, Machine Learning, Deep Learning, and Web Technologies.",
		"About Me",
		"I am currently pursuing a Bachelor's degree in Computer Science from University of the punjab, which is widely recognized as one of the top universities in Pakistan. Prior to that, I completed my FSC (high school equivalent) from Punjab College Jhelum, where I developed essential leadership skills and underwent rigorous grooming.\nMy main interests lie in the fields of Artificial Intelligence, Machine Learning, Deep Learning, and Web Development. I have experience working on real-life projects through internships, freelancing, and personal projects. My goal is to continue enhancing my skills and knowledge and utilize them to solve real-world problems.\nRegarding Artificial Intelligence, I have worked extensively with Python and various libraries such as TensorFlow, PyTorch, Keras, ScikitLearn, Numpy, Pandas, and Matplotlib. In Web Designing and Development, I have handson experience with  Flask, Fast API, Django, HTML, CSS, Tailwind CSS, SQL, MYSQL, Javascript, and jQuery.\nBy combining my strong educational background, practical experience, and passion for emerging technologies, I am committed to making a meaningful contribution to the field of software engineering."
	)
}