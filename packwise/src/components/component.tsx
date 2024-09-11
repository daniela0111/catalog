type MyComponentProps = {
    name: string;
  };
  
  function MyComponent(props: MyComponentProps) {
    return (
      <div>Hello, {props.name}!</div>
    );
  }