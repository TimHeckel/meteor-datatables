##What is it?
This is a smart package built for use with Meteor and the Twitter Bootstrap library, using the [example defined here](http://datatables.net/blog/Twitter_Bootstrap_2) as a basis.

##How to install
1. `npm install -g meteorite` (if not already installed)
2. `mrt add datatables`

##HTML & Javascript quick start
    
    <table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-bordered" id="example">
        <thead>
           <tr>
              <th>Rendering engine</th>
              <th>Browser</th>
              <th>Platform(s)</th>
              <th>Engine version</th>
              <th>CSS grade</th>
            </tr>
          </thead>
          <tbody>
            <tr class="odd gradeX">
              <td>Trident</td>
              <td>Internet
                 Explorer 4.0</td>
              <td>Win 95+</td>
              <td class="center"> 4</td>
              <td class="center">X</td>
            </tr>
            </tbody>
        </table>

##

    $('#example').dataTable({
        "sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>"
        , "sPaginationType": "bootstrap"
        , "oLanguage": {
            "sLengthMenu": "_MENU_ records per page"
        }
    });

You can learn more about the [DataTables API here](http://datatables.net/index).
