export interface APIResInterface {
    properties: object;
    chart: [
        {
            heading: {
                title: string,
                subtitle: string
            },
            url: string,
            images: {
                default: string
            }
        }];
}
