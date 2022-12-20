import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
  EmptyState,
  Button,
} from "@shopify/polaris";
import { NavigationMenu, TitleBar } from "@shopify/app-bridge-react";
import $ from 'jquery';

export default function HomePage() {
  function testFnct() {
    //console.log($('#testBtn'));
    $.ajax({
      type: "POST",
      url: "http://13.41.188.76/ajaxExample.php",
      //url: "https://blazemedia.co.uk/wp-content/themes/new-blaze/ajaxExample.php",
      data: {testData: "testing"},
      success: function(data){
        console.log(data + "!");
      },
      error: function(jqXHR, textStatus, errorThrown){
        alert("status: " + jqXHR.status + "\ntextStatus: " + textStatus + "\nerrorThrown: " + errorThrown);
      }
    })
  }
  return (
    <Page narrowWidth>
      <TitleBar title="OGL Connector App" primaryAction={null} />
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Stack
              wrap={false}
              spacing="extraTight"
              distribution="trailing"
              alignment="center"
            >
              <Stack.Item fill>
                <TextContainer spacing="loose">
                  <Heading>Click this button to force a sync between OGL and Shopify</Heading>
                  <Button id="testBtn"
                    onClick={
                      testFnct
                    }
                  >Add New Stuff</Button>
                </TextContainer>
              </Stack.Item>
            </Stack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}