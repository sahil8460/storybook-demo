import Stack from '../components/Stack';

export default {
    title: 'Components/Stack',
    component: Stack,
    argTypes: {
        numberOfChildren: { type: "number", defaultValue: 40}
    }
}

const Template = ({ numberOfChildren, ...args}) => (
    <Stack {...args}>
        {console.log("numberOfChildren", numberOfChildren)}
        {[...Array(numberOfChildren).keys()].map(n => (
            <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: (args.flexDirection === "row")?"40px":"40px",
                width: (args.flexDirection === "row")?"70px":"100px",
                padding: "2px",
                backgroundColor: "red"
            }}
            >
                {n+1}
            </div>
        ))}
    </Stack>
)

export const Horizontal = Template.bind({})
Horizontal.args = {
    direction: "row",
    spacing: 2,
    wrap: false
};

export const HorizontalWithWrap = Template.bind({})
HorizontalWithWrap.args = {
    direction: "row",
    spacing: 2,
    wrap: true
}

export const Vertical = Template.bind({})
Vertical.args = {
    direction: "column",
    spacing: 2,
    wrap: false
};

export const LessComp = Template.bind({});
LessComp.args = {
    numberOfChildren: 5,
}

export const MoreComp = Template.bind({});
MoreComp.args = {
    numberOfChildren: 20,
}


