function About(props) {
    return (
        <div className={'max-w-screen-md'}>
            <h1 className={'flex justify-center p-1 mt-10 font-bold'}>About</h1>
            <body className={'justify-center border p-8'}>
                To utilize the todo list task management app, add items and submit them. You can check-off items to add them to your completed list, 
                view active items in the active list, and view active and completed items under "all". Delete items by clicking the trashcan icon.
            </body>
        </div>
    );
}

export default About;