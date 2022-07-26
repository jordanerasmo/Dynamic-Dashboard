<%@ Page Title="Inicio" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="IndexDashboard.aspx.cs" Inherits="DynamicDashboard._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

    <div id="contenedor-cajas">
        <!--CAJA 1-->
        <div class="caja alto">
            <div class="centradorCaja">
                <div class="cajaSup">
                    <p class="tituloCaja">Caja 1</p>
                    <input type="button" value="Actualizar" id="btnActCaja1" onclick="contenidoCaja1()" />
                </div>
                <div class="contenidoCaja">
                    <div id="contenidoCaja1">
                        <div>
                            <canvas id="grafico-1" width="400" height="400"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--CAJA 2-->
        <div class="caja ancho">
            <asp:UpdatePanel ID="UpdatePanel2" runat="server" UpdateMode="Conditional">
                <ContentTemplate>
                    <div class="centradorCaja">
                        <div class="cajaSup">
                            <p class="tituloCaja">Caja 2</p>
                            <input type="button" value="Actualizar" class="disabled"/>
                        </div>
                         <div class="contenidoCaja">
                            <div id="contCaja2">
                                <p>Hora dinamica</p>
                                <asp:Label ID="lblReloj" runat="server"></asp:Label>
                                <asp:Timer ID="Timer1" runat="server" OnTick="tmrRelojInterno_Tick1" Interval= "1000"></asp:Timer>
                            </div>
                        </div>
                    </div>
                </ContentTemplate>
            </asp:UpdatePanel>
        </div>

        <!--CAJA 3-->
        <div class="caja alto">
            <div class="centradorCaja">
                <div class="cajaSup">
                    <p class="tituloCaja">Caja 3</p>
                    <input type="button" value="Actualizar" id="btnActCaja3" onclick="contenidoCaja3()" />
                </div>
                <div class="contenidoCaja">
                    <div>
                        <canvas id="grafico-3" width="400" height="400"></canvas>
                    </div>
                </div>
            </div>
        </div>

        <!--CAJA 4-->
        <div class="caja chico">
            <div class="centradorCaja">
                <div class="cajaSup">
                    <p class="tituloCaja">Caja 4</p>
                    <input type="button" value="Actualizar" id="btnActCaja4" onclick="contenidoCaja4()" />
                 </div>
                <div class="contenidoCaja">
                    <div id="contImg"></div>
                </div>
            </div>
        </div>

        <!--CAJA 5-->
        <div class="caja alto">
            <div class="centradorCaja">
                <div class="cajaSup">
                    <p class="tituloCaja">Caja 5</p>
                    <input type="button" value="Actualizar" id="btnActCaja5" onclick="contenidoCaja5()" />
                </div>
                <div class="contenidoCaja">
                    <div>
                        <canvas id="grafico-5" width="400" height="400"></canvas>
                    </div>
                </div>
            </div>
        </div>

        <!--CAJA 6-->
        <div class="caja chico">
            <asp:UpdatePanel ID="UpdatePanel6" runat="server" UpdateMode="Conditional">
                <ContentTemplate>
                    <div class="centradorCaja">
                        <div class="cajaSup">
                            <p class="tituloCaja">Caja 6</p>
                            <asp:Button Text="Actualizar" runat="server" OnClick="Caja_6_Click"/>
                        </div>
                        <div class="contenidoCaja">
                            <div id="contCaja6">
                                <p>Hora estatica</p>
                                <asp:Label ID="lblCaja6" runat="server"></asp:Label>
                            </div>
                            <asp:Label ID="contenidoCaja6" runat="server"></asp:Label>
                        </div>
                    </div>
                </ContentTemplate>
            </asp:UpdatePanel>            
        </div>

        <!--CAJA 7-->
        <div class="caja chico">
            <div class="centradorCaja">
                <div class="cajaSup">
                    <p class="tituloCaja">Caja 7</p>
                    <input type="button" value="Actualizar" id="btnActCaja7" onclick="contenidoCaja7()" />
                </div>
                 <div class="contenidoCaja">
                    <div>
                        <canvas id="grafico-7" width="400" height="400"></canvas>
                    </div>
                </div>
            </div>
        </div>

        <!--CAJA 8-->
        <div class="caja chico">
            <div class="centradorCaja">
                <div class="cajaSup">
                    <p class="tituloCaja">Caja 8</p>
                    <input type="button" value="Actualizar" id="btnActCaja8" onclick="contenidoCaja8()" />
                </div>
                <div class="contenidoCaja">
                    <div>
                        <canvas id="grafico-8" width="400" height="400"></canvas>
                    </div>
                </div>
            </div>
        </div>
    </div>

</asp:Content>